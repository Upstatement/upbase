'use strict';

module.exports = function(grunt) {

  var version = grunt.file.readJSON('bower.json').version;

  grunt.initConfig({
    sassdoc: {
      src: 'scss'
    },
    copy: {
      docs: {
        src: 'docs/latest',
        dest: 'docs/' + version
      }
    },
    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sassdoc');

  grunt.registerTask('update-docs', ['sassdoc']);
  grunt.registerTask('release-docs', ['update-docs', 'copy:docs']);
  grunt.registerTask('deploy-docs', ['gh-pages']);
};
