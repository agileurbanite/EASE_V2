/**
 * Created by yuchennie on 6/23/14.
 */
var paymentOptions = [
    {
        display:'Add New',
        option:'1'
    },
    {
        display:'Specialized',
        option:'2',
        email:'sales@Specialized.com',
        accountNumber:'1234'
    },
    {
        display:'BMC',
        option:'3',
        email:'sales@BMC.com',
        accountNumber:'5678'
    },
    {
        display:'Trek',
        option:'4',
        email:'sales@Trek.com',
        accountNumber:'9876'
    }
];

var accounts = [
    {
        display:'360 Checking',
        amount:12.34,
        number:'1234'
    },
    {
        display:'360 Savings',
        amount:153.21,
        number:'0987'
    }
];

define(['./billPay-module','./billPay-services'], function(module){
    'use strict';
    module.controller('p2pBaseController', ['$scope','$state', 'p2pFactory',function($scope, $state,p2pFactory){
        $scope.title='p2p Base';
        $scope.paymentOptions = paymentOptions;

        $scope.checkType=function(payToAccount){

            if(p2pFactory.checkAdd(payToAccount)){
                $state.go('p2pBase.addNew');
            }else{
                $state.go('p2pBase.newPayment');
                $scope.payToAccount=payToAccount;
            }
        }
    }]);

    module.controller('p2pAddNewRecController',['$scope','p2pFactory','$state', function($scope, p2pFactory, $state){
        $scope.error='';

        $scope.submitRec=function(payer){

            if(p2pFactory.validateNewPayer(payer)){
                $scope.error='';
                payer.option=$scope.$parent.paymentOptions.length+1;
                payer.display=payer.payName;
                payer.email=payer.payEmail;
                payer.accountNumber=payer.payAccountNumber;
                $scope.$parent.paymentOptions.push(payer);
                //console.log($state);
                $state.go('p2pBase');

            }else{
                $scope.error='Please check your information and try again';
            }
        }
    }]);

    module.controller('p2pPaymentController',['$scope','p2pFactory','$state', function($scope, p2pFactory, $state){
        $scope.accounts=accounts;
        $scope.error='';
        $scope.payToAccount=$scope.$parent.payToAccount;
        $scope.initatePayment=function(payFromAccount, payAmount){

            if(!p2pFactory.checkPaymentAmount(payFromAccount.amount, payAmount)){
                $scope.error = 'You do not have the necessary funds';
            }else{
                $scope.error='';
                if(p2pFactory.payAmount(payFromAccount, payAmount)){
                    $state.go('p2pComplete');
                }else{
                    $scope.error='Oops, looks like there\'s an error, please check your network and try again';
                }

            }
        };

        $scope.setAvail=function(payFromAccount){
            $scope.available='Available Funds: $'+payFromAccount.amount;
        }
    }]);

    module.controller('p2pCompleteController',['$scope','p2pFactory','$state', function($scope, p2pFactory, $state){
        $scope.goToStart=function(){
            $state.go('p2pBase');
        }
    }]);
});

//define(['./billPay-module','./billPay-services'], function(module){
//    'use strict';
//
//});
//
//define(['./billPay-module','./billPay-services'], function(module){
//    'use strict';
//
//});
//
//define(['./billPay-module','./billPay-services'], function(module){
//    'use strict';
//
//});
