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
      work: ['server', 'watch']
    },

    connect: {
      server: {
        options: {
          port: 8300,
          hostname: '*',
          useAvailablePort: true,
          keepalive: true,
          livereload: 1338
        }
      }
    },

    karma: {
      options: {
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        reporters: 'dots',
        files: [
          'vendors/underscore-min.js',
          'app/board.js',
          'app/board.spec.js'
        ]
      },

      dist: {
        singleRun: true
      },

      dev: {
        singleRun: false
      }
    },

    jshint: {
      dist: {
        src: 'app/**/*.js',
        options: readJSON('.jshintrc')
      }
    },

    jscs: {
      dist: {
        src: 'app/**/*.js',
        options: readJSON('.jscsrc')
      }
    },

    watch: {
      js: {
        files: 'app/**/*.js',
        options: {
          livereload: 1338
        }
      }
    }
  });

  /**
   * Defining aliases
   */
  grunt.registerTask('spec', ['karma:dev']);
  grunt.registerTask('server', ['connect']);
  grunt.registerTask('work', ['concurrent']);
  grunt.registerTask('default', ['jshint', 'jscs', 'karma:dist']);

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
