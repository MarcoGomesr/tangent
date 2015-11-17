/* #############################################################################
 * Title: Gruntfile.js
 * Desc: The grunt build configuration file. 
 * Author: Marco Gomes
 * Date: 14th Nov 2015
 * License: MIT
 * #############################################################################
*/

module.exports = function(grunt) {  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
   
    jade: {
      compile: {
        files: [ {
          expand: true,
          cwd: "src/views",      
          src: "*.jade",
          dest: "build/",      
          ext: ".html"
        } ]
      }
    },

   express: {
      all: {
        options: {
          port: 6080,
          hostname: "0.0.0.0"
        }
      }
    },

    copy: {
      main: {
        expand: true,
        flatten: true,
        src: ['src/img/**'],
        dest: 'build/img',
        filter: 'isFile'
      },
    },

    watch: {
      options: {
        livereload: true
      },

      files: ['src/views/*.jade','src/views/_partials/*.jade'],
        tasks: ['jade']
    },

    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
        },

        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['style.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['style.scss', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.registerTask('default',['copy', 'jade', 'sass', 'cssmin', 'watch']);
};