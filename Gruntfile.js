module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'massive-bear.js']
        },
        uglify: {
            options: {
                mangle: false,
            },
            my_target: {
                files: {
                    'bin/massive-bear.min.js': ['massive-bear.js']
                }
            }
        },
        jsbeautifier: {
            files: ["massive-bear.js", 'Gruntfile.js'],
            options: {}
        },
        qunit: {
            all: ['tests/test.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('default', ['jsbeautifier', 'jshint', 'uglify']);

};
