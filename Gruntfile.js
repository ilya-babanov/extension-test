module.exports = function(grunt){
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    data: {
                        debug: true
                    }
                },
                files: [ {
                    expand: true,
                    dest: "build/",
                    src: "*.jade",
                    cwd: "src/",
                    ext: ".html"
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
                        src: "*.js",
                        cwd: "src/"
                    },
                    {
                        expand: true,
                        dest: "build/",
                        src: "*.json",
                        cwd: "src/"
                    } ]
            }
        },
        watch: {
            jade: {
                files: 'src/**/*.jade',
                tasks: 'jade:compile'
            },
            styl: {
                files: 'src/**/*.styl',
                tasks: 'stylus:compile'
            },
            copy: {
                files: ['src/**/*.js', 'src/**/*.json'],
                tasks: 'copy:main'
            }
        }
    });

    /*grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jade', 'stylus', 'copy']);
};