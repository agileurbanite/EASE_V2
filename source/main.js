/**
 * Created by yuchennie on 6/23/14.
 */

'use strict';

require.config({
    paths: {
        'angular'       : '../bower_components/angular/angular',
        'domReady'      : '../bower_components/requirejs-domready/domReady',
        'ui.router'     : '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'jQuery'        : '../bower_components/jquery/dist/jquery.min',
        'text'          : '../bower_components/requirejs-text/text'
    },

    shim: {
        'angular': {
            'exports': 'angular'
        },
        'ui.router' : ['angular']
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'text',
    'jQuery',
    './index'
], function (angular) {
    //This function will be called when all the dependencies
    //listed above are loaded. Note that this function could
    //be called before the page is loaded.
    //This callback is optional.

    $(document).ready(function () {
        angular.bootstrap(document, ['EASEApp']);
    });
});