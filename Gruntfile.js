module.exports = function(grunt) {
  var readJSON = function (filePath) {
    // Read the JSON file as a regular file
    var str = grunt.file.read(filePath);

    // Remove comments
    str = str.replace(/\/\/.*/mg, '');

    // Returns a valid JSON
    return JSON.parse(str);
  };

  // Project configuration.
  grunt.initConfig({
    concurrent: {
      options:{
        logConcurrentOutput: true
      },
      dist: ['server', 'watch:build']
    },

    connect: {
      dist: {
        options: {
          base: 'build',
          port: 8300,
          hostname: '*',
          useAvailablePort: true,
          keepalive: true,
          livereload: 1338,
          open: 'http://localhost:8300/'
        }
      }
    },

    copy: {
      dist: {
        // includes files within path and its sub-directories
        files: [
          {expand: true, src: ['index.html'], dest: 'build/'},
          {expand: true, src: ['app/**'], dest: 'build/'},
          {expand: true, src: ['vendor/**'], dest: 'build/'}
        ]
      },
    },

    karma: {
      dist: {
        frameworks: ['jasmine', 'requirejs'],
        browsers: ['Chrome'],
        reporters: 'dots',
        singleRun: true,
        options: {
          files: [
            {pattern: 'vendor/*.js', included: false},
            {pattern: 'app/board/view.js', included: false},
            {pattern: 'app/board/view.spec.js', included: false},
            {pattern: 'app/score/view.js', included: false},
            {pattern: 'app/score/view.spec.js', included: false},
            {pattern: 'app/timer/view.js', included: false},
            {pattern: 'app/timer/view.spec.js', included: false},
            'app/init.spec.js'
          ]
        }
      }
    },

    jshint: {
      dist: {
        src: ['app/**/*.js'],
        options: readJSON('config/.jshintrc')
      }
    },

    jscs: {
      dist: {
        src: 'app/**/*.js',
        options: readJSON('config/.jscsrc')
      }
    },

    less: {
      dist: {
        files: [
            {
                expand: true,
                cwd: './',
                src: ['app/**/*.less'],
                dest: './',
                ext: '.css'
            }
        ]
      }
    },

    notify: {
      dist: {
        options: {
          message: 'Everything\'s alright!'
        }
      }
    },

    watch: {
      review: {
        files: ['app/**/*.js'],
        tasks: ['default'],
        options: {
          atBegin: true
        }
      },

      build: {
        files: ['app/**/*.less', 'app/**/*.js', 'index.html'],
        tasks: ['less'],
        options: {
          atBegin: true,
          livereload: 1338
        }
      }
    }
  });

  /**
   * Defining aliases
   */
  grunt.registerTask('spec', ['karma']);
  grunt.registerTask('server', ['connect']);
  grunt.registerTask('work', ['concurrent']);
  grunt.registerTask('default', ['jshint', 'jscs', 'karma', 'notify']);

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
