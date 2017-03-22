module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: 'build',
                    livereload: true,
                    open: {
                        target: 'http://localhost:8080/'
                    }
                }
            }
        },

        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/js/script.js',
            }
        },
        uglify: {
            build: {
                src: 'build/js/script.js',
                dest: 'build/js/script.min.js'
            }
        },
        eslint: {
            target: 'build/js/script.js'
        },
        cssmin: {
            target: {
                files: {
                    'build/css/style.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['css/*.css'],
                tasks: ['clean:css_min', 'cssmin', 'hashres:css'],
            },

            scripts: {
                files: ['js/*.js'],
                tasks: [ 'clean:js_min', 'concat', 'uglify', 'eslint', 'clean:script', 'hashres:scripts'],
            },

            html: {
                files: 'index.html',
                tasks: ['copy', 'hashres'],
            }
        },
        clean: {
            script: 'build/js/script.js',
            js_min:  'build/js/*.js',
            css_min:  'build/css/*.css'
        },

        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.${ext}',
                renameFiles: true,
            },
            scripts: {
                src: 'build/js/script.min.js',
                dest: 'build/index.html',
            },

            css: {
                src: 'build/css/style.min.css',
                dest: 'build/index.html',
            },
        },
        
        copy: {
            html: {
            expand: true,
            src:  ['index.html', 'img/*.*'],
            dest:  'build/',
            }
        },


    });

    grunt.loadNpmTasks('dp-grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['clean', 'copy' , 'concat', 'uglify', 'cssmin', 'eslint', 'clean:script', 'connect', 'hashres', 'watch']);

};