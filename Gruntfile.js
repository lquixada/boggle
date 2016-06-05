module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    githooks: {
      dist: {
        'pre-push': 'review'
      }
    }
  });

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
