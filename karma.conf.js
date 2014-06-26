/**
 * Created by yuchennie on 6/23/14.
 */
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['requirejs','mocha','chai'],


        // list of files / patterns to load in the browser
        files: [
            {pattern:'bower_components/requirejs/require.js',included: false},
            {pattern:'bower_components/angular/angular.js',included: false},
            {pattern:'bower_components/angular-ui-router/release/angular-ui-router.js',included: false},
            {pattern:'bower_components/angular-mocks/angular-mocks.js',included: false},
            {pattern:'source/**/**/*.js',included: false},
            {pattern:'source/**/*.js',included: false},
            {pattern:'source/**/**/**/*.html',included: false},
            {pattern:'source/*.js',included: false},
            {pattern:'test/features/**/*.spec.js',included: false},
            'test/main-test.js'
        ],

        // list of files to exclude
        exclude: [
            'source/main.js'
        ],

        plugins:[
            'karma-requirejs',
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-ng-html2js-preprocessor'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'source/features/**/**/**.html':['ng-html2js']
        },

        ngHtml2JsPreprocessor:{
            stripPrefix:'source/features/billBay/'
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9999,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });


};