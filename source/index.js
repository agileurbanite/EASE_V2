/**
 * Created by yuchennie on 6/23/14.
 */
'use strict';

define(['angular','ui.router','./features/billPay/billPay-index'], function(angular){
    return angular.module('EASEApp',['ui.router','billPay'])
        .config(function($stateProvider, $urlRouterProvider){
            var p2pStateBase = {
                name: 'base',
                url:'/base',
                template:'<h2>Angular Loaded</h2>'
            };

            $stateProvider
                .state(p2pStateBase);

            $urlRouterProvider.otherwise('/base');
        });
});