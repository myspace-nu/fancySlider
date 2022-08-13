module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!\n'+
                ' * fancySlider v<%= pkg.version %>\n'+
                ' * https://github.com/myspace-nu\n'+
                ' *\n'+
                ' * Copyright 2022 Johan Johansson\n'+
                ' * Released under the MIT license\n'+
                ' */\n'
            },
            build: {
                src: 'js/fancySlider.js',
                dest: 'dist/fancySlider.min.js'
            }
        },
        cssmin: {
            target: {
              files: {
                'dist/fancySlider.min.css': ['css/fancySlider.css']
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify','cssmin']);
};