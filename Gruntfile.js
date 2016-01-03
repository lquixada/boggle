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
      dist: ['server', 'watch']
    },

    connect: {
      dist: {
        options: {
          port: 8300,
          hostname: '*',
          useAvailablePort: true,
          keepalive: true,
          livereload: 1338,
          open: 'http://localhost:8300/'
        }
      }
    },

    karma: {
      dist: {
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        reporters: 'dots',
        singleRun: true,
        options: {
          files: [
            'vendor/underscore-min.js',
            'app/board.js',
            'app/board.spec.js'
          ]
        }
      }
    },

    jshint: {
      dist: {
        src: ['app/**/*.js'],
        options: readJSON('.jshintrc')
      }
    },

    jscs: {
      dist: {
        src: 'app/**/*.js',
        options: readJSON('.jscsrc')
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
      dist: {
        files: 'app/**/*.js',
        tasks: ['default'],
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
