/**
 * Created by yuchennie on 6/23/14.
 */
// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/i.test(file)) {
            tests.push(file);
            console.log('push: '+'tests: '+tests+' file:'+file);
        }
    }
}

require.config({
    paths: {
        'angular'       : '/base/bower_components/angular/angular',
        'ui.router'     : '/base/bower_components/angular-ui-router/release/angular-ui-router',
        angularMocks: '/base/bower_components/angular-mocks/angular-mocks'
    },
    baseUrl: '/base/source',
    shim: {
        'angular' : {'exports' : 'angular'},
        'ui.router': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    priority: [
        "angular"
    ],

    deps:tests,
    callback:  window.__karma__.start
});
