// ./Gruntfile.js
module.exports = function(grunt) {
    "use strict";


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    keepalive: true
                }
            }
        }

    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['connect:server']);
};