module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            './src/**/*.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {}
    });
};