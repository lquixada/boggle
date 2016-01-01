module.exports = function(grunt) {
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
  grunt.registerTask('work', ['concurrent']);

  /**
   * Loading tasks
   */
  require('load-grunt-tasks')(grunt);
};
