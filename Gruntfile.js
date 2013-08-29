module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    sassDir:"sass",
                    cssDir:"stylesheets",
                    specify : "sass/modern.scss"
                }
            }
        },
        watch: {
            files: ['sass/*.scss'],
            tasks: ['compass'],
            options: {
                livereload: true
            }

        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');


    grunt.registerTask('default', ['compass']);

};