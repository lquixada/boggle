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
    clean: {
      build: {
        src: ['build/']
      },

      files: {
        src: ['build/**/*.less', 'build/**/*.spec.js']
      }
    },

    concurrent: {
      options:{
        logConcurrentOutput: true
      },
      dist: ['server:dev', 'watch:build']
    },

    connect: {
      options: {
        port: 8300,
        hostname: '*',
        useAvailablePort: true,
        keepalive: true,
        livereload: 1338,
        open: 'http://localhost:8300/'
      },

      dev: {
        base: '.'
      },

      build: {
        base: 'build/'
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

    cssmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: './',
            src: ['build/app/**/*.css'],
            dest: './',
            ext: '.css'
          }
        ]
      }
    },

    'gh-pages': {
      options: {
        base: 'build',
        clone: '.tmp'
      },
      src: ['**']
    },

    githooks: {
      dist: {
        'pre-push': 'review'
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

    karma: {
      dist: {
        frameworks: ['jasmine', 'requirejs'],
        browsers: ['Chrome'],
        reporters: 'dots',
        singleRun: true,
        options: {
          files: [
            {pattern: 'vendor/text/text.js', included: false},
            {pattern: 'vendor/jquery/dist/jquery.min.js', included: false},
            {pattern: 'vendor/jquery-knob/dist/jquery.knob.min.js', included: false},
            {pattern: 'vendor/underscore/underscore-min.js', included: false},
            {pattern: 'app/base/view.js', included: false},
            {pattern: 'app/board/view.js', included: false},
            {pattern: 'app/board/view.spec.js', included: false},
            {pattern: 'app/board/style.css', included: false},
            {pattern: 'app/board/template.tpl', included: false},
            {pattern: 'app/score/view.js', included: false},
            {pattern: 'app/score/view.spec.js', included: false},
            {pattern: 'app/score/style.css', included: false},
            {pattern: 'app/score/template.tpl', included: false},
            {pattern: 'app/timer/view.js', included: false},
            {pattern: 'app/timer/view.spec.js', included: false},
            {pattern: 'app/timer/style.css', included: false},
            {pattern: 'app/timer/template.tpl', included: false},
            'app/init.spec.js'
          ]
        }
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
          message: 'build successful!'
        }
      }
    },

    uglify: {
      dist: {
        files: [
          {
            expand: true,
            cwd: './',
            src: ['build/app/**/*.js'],
            dest: './',
            ext: '.js'
          }
        ]
      }
    },

    watch: {
      review: {
        files: ['app/**/*.js'],
        tasks: ['review', 'notify'],
        options: {
          atBegin: true
        }
      },

      build: {
        files: ['app/**/*.less', 'app/**/*.js', 'index.html'],
        tasks: ['build', 'notify'],
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
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('publish', ['gh-pages']);
  grunt.registerTask('server:dev', ['connect:dev']);
  grunt.registerTask('server:build', ['connect:build']);
  grunt.registerTask('work', ['concurrent']);
  grunt.registerTask('review', ['lint', 'spec']);
  grunt.registerTask('build', ['clean:build', 'less', 'copy', 'clean:files', 'uglify', 'cssmin']);
  grunt.registerTask('deploy', ['build', 'review', 'publish']);

  grunt.registerTask('default', ['review']);

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
