/**
 * Created by yuchennie on 6/23/14.
 */
define(['angular','ui.router'], function(angular){
   return angular.module('billPay',['ui.router']).config(['$stateProvider', function($stateProvider){
       var p2pStateBase = {
           name: 'p2pBase',
           url:'/p2pBase',
           templateUrl:'/source/features/billPay/partials/p2pBase.html',
           controller:'p2pBaseController'
       };

       var p2pStateAddRec ={
           name: 'p2pBase.addNew',
           templateUrl:'/source/features/billPay/partials/p2pAddNewRec.html',
           controller:'p2pAddNewRecController'
       };

       var p2pStateNewPayment ={
           name: 'p2pBase.newPayment',
           templateUrl:'/source/features/billPay/partials/p2pCreatePayment.html',
           controller:'p2pPaymentController'
       };

       var p2pStateCompletePayment = {
           name: 'p2pComplete',
           templateUrl:'/source/features/billPay/partials/p2pComplete.html',
           controller:'p2pCompleteController'
       };

       $stateProvider
           .state(p2pStateBase)
           .state(p2pStateAddRec)
           .state(p2pStateNewPayment)
           .state(p2pStateCompletePayment);
   }
   ]);
});