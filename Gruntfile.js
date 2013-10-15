module.exports = function(grunt){
    grunt.initConfig({
        jade: {
            compileHtml: {
                options: {
                    debug: true
                },
                files: [ {
                    expand: true,
                    dest: "build/",
                    src: "popup.jade",
                    cwd: "src/",
                    ext: ".html"
                } ]
            },
            compileJs: {
                options: {
                    debug: false,
                    client: true
                },
                files: [ {
                    expand: true,
                    dest: "build/",
                    src: "table.jade",
                    cwd: "src/",
                    ext: ".js"
                } ]
            }
        },
        stylus: {
            compile: {
                files: [ {
                    expand: true,
                    dest: "build/",
                    src: "*.styl",
                    cwd: "src/",
                    ext: ".css"
                } ]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        dest: "build/",
                        src: ["*.js", "*.json"],
                        cwd: "src/"
                    }
                ]
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                undef: true
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.json']
        },
        clean: ['build'],
        watch: {
            jade: {
                files: 'src/**/*.jade',
                tasks: 'jade:compileHtml'
            },
            stylus: {
                files: 'src/**/*.styl',
                tasks: 'stylus:compile'
            },
            copy: {
                files: ['src/**/*.js', 'src/**/*.json'],
                tasks: ['copy:main'/*, 'jshint:all'*/]
            }
        }
    });

    /*grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'jade', 'stylus', 'copy']);
};