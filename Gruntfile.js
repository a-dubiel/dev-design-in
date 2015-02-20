module.exports = function(grunt) {

  'use strict'

  grunt.config.init({

    /* Project information */
    pkg: grunt.file.readJSON('package.json'),

    /* Paths */
    path: {
      tasks       : 'grunt',
      source      : 'source',
      build       : 'build',
      reports     : 'reports',
      images      : 'images',
      scripts     : 'scripts',
      styles      : 'styles',
      views       : 'views', 
      components  : 'components',
      misc        : 'misc',
      fonts       : 'fonts' 
    },

    /* Banner */
    banner: {
      expanded:
        '/*\n' +
        ' * <%= pkg.name %>\n' +
        ' * v. <%= pkg.version %>\n' +
        ' * <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
        ' * \n' +
        ' * <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.author.url %>\n' +
        ' */\n\n',
      compressed:
        '/*!<%= pkg.name %> v<%= pkg.version %> | <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> | <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>*/'
    },

    /* Local Development */
    watch                 : require('./grunt/watch.js').task,
    connect               : require('./grunt/connect.js').task, 
    
    /* Styles */
    less                  : require('./grunt/less.js').task,
    autoprefixer          : require('./grunt/autoprefixer.js').task,
    csslint               : require('./grunt/csslint.js').task, 
    csscomb               : require('./grunt/csscomb.js').task,   
    csso                  : require('./grunt/csso.js').task, 

    /* Scripts */
    concat                : require('./grunt/concat.js').task, 
    uglify                : require('./grunt/uglify.js').task, 

    /* Images */
    imagemin              : require('./grunt/imagemin.js').task,
    svgmin                : require('./grunt/svgmin.js').task,

    /* Bower */
    bower                 : require('./grunt/bower.js').task,
    
    /* Misc */
    copy                  : require('./grunt/copy.js').task,
    htmlmin               : require('./grunt/htmlmin.js').task,


});

/* Dependencies */
require('time-grunt')(grunt);
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

/* Tasks */
grunt.registerTask('default', ['dev', 'build']);
grunt.registerTask('dev', ['connect', 'watch']);
grunt.registerTask('build', ['buildbower', 'styles', 'scripts', 'images', 'misc']);
grunt.registerTask('buildbower', ['bower', 'copy:bowerutils']);
grunt.registerTask('styles', ['less', 'autoprefixer', 'csslint', 'csscomb', 'csso']);
grunt.registerTask('scripts', ['concat', 'uglify']);
grunt.registerTask('images', ['imagemin', 'svgmin']);
grunt.registerTask('misc', ['htmlmin', 'copy:misc']);  

};