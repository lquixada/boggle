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
    }
  });

  /**
   * Defining aliases
   */
  grunt.registerTask('lint', ['jshint', 'jscs']);

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
