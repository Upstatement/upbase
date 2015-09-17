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
    },
    browserSync: {
      bsFiles: {
        src: [
          'scss/**/*.scss',
          'docs/latest/**/*',
          'package.json'
        ]
      },
      options: {
        server: {
          watchTask: true,
          baseDir: './docs/latest'
        }
      }
    },
    watch: {
      docs: {
        src: ['scss/**/*.scss'],
        tasks: ['sassdoc']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sassdoc');

  grunt.registerTask('update-docs', ['sassdoc']);
  grunt.registerTask('release-docs', ['sassdoc', 'copy:docs']);
  grunt.registerTask('deploy-docs', ['gh-pages']);
  grunt.registerTask('serve-docs', ['browserSync', 'watch']);
};
