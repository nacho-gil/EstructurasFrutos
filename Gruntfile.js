// ./Gruntfile.js
module.exports = function(grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            },
            php: {
                src: 'src/mailer.php',
                dest: 'dist/mailer.php'
            },
            scripts: {
                src: 'src/js/jquery.1.10.2.js',
                dest: 'dist/js/jquery.1.10.2.js'
            },
            fonts: {
                expand: true, 
                cwd: 'src/',
                src: 'font/**',
                dest: 'dist/'
            },
            images: {
                expand: true, 
                cwd: 'src/',
                src: 'img/**',
                dest: 'dist/'
            },
            docs: {
                expand: true, 
                cwd: 'src/',
                src: 'docs/**',
                dest: 'dist/'
            }
        },

        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            html: ['dist/index.html']
        },

        connect: {
            server: {
                options: {
                    keepalive: true
                }
            }
        }

    });

    grunt.registerTask('default', [
        'copy',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'connect:server'
    ]);
};