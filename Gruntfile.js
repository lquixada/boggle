module.exports = function(grunt) {
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
    },

    watch: {
      js: {
        files: '**/*.js',
        options: {
          livereload: 1338,
        },
      },
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
