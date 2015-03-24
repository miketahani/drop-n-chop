'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      target: {
        src: 'app/index.html'
      }
    },
    jshint: {
      files: ['src/js/*.js']
    },
    uglify: {
      app: {
        options: {
          compress: true,
          mangle: true,
          sourceMap: true
        },
        files: {
          'app/static/js/app.js': ['src/js/*.js']
        }
      }
    },
    sass: {                              
      dist: {                            
        options: {                       
          style: 'compact'
        },
        files: {
          'app/static/css/app.css': 'src/sass/site.scss'
        }
      }
    },
    watch: {
      all: {
        files: ['src/js/*.js', 'src/sass/*.scss'],
        tasks: ['default'],
      }
    },
  });

  // Loading tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-wiredep');

  // Tasks.  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('build', ['wiredep', 'js', 'css']);
  grunt.registerTask('bower', ['wiredep'])
  grunt.registerTask('css',['sass']);
  grunt.registerTask('lint', ['jshint']);

};
