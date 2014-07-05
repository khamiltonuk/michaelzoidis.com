'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      dev: {
        options: {
          script: 'app.js'
        }
      },
    },

    sass: {
      dist: {
        files: {
          'assets/css/styles.css': 'assets/sass/styles.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true
        },
        files: {
          'assets/css/styles.css': 'assets/sass/styles.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass:dev'],
        options: {
          spawn: false
        },
      },
      express: {
        files: ['app/**/*.js', 'app.js'],
        tasks: ['express:dev'],
        options: {
          spawn: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('serve', ['express:dev', 'sass:dev', 'watch']);
};