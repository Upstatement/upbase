'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sassdoc: {
      src: 'scss'
    },
    copy: {
      docs: {
        src: 'docs/latest',
        dest: 'docs/<%= pkg.version %>'
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

  grunt.registerTask('update-docs', ['sassdoc']);
  grunt.registerTask('release-docs', ['sassdoc', 'copy:docs']);
  grunt.registerTask('deploy-docs', ['gh-pages']);
  grunt.registerTask('serve-docs', ['browserSync', 'watch']);

};
