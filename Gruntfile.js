module.exports = function(grunt) {
  var livereload = {
    port: 1338
  };

  // Project configuration.
  grunt.initConfig({
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
    }
  });

  /**
   * Defining aliases
   */
  grunt.registerTask('server', ['connect']);

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
