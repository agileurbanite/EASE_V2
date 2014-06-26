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
        amount:'12.32',
        number:'1234'
    },
    {
        display:'360 Savings',
        amount:'153.21',
        number:'0987'
    }
];

define([
    'angular',
    'angularMocks',
    'features/billPay/billPay-controllers'], function(angular, mocks, controller) {
    describe('P2P App', function () {
        beforeEach(module('billPay'));
        var p2pPaymentController, scope, factory, p2pAddController, state;

        describe("A p2p Pay Test", function () {
            beforeEach(
                inject(function ($controller, $rootScope, p2pFactory) {
                    scope = $rootScope.$new();
                    factory = p2pFactory;
                    p2pPaymentController = $controller('p2pPaymentController', {
                        $scope: scope,
                        p2pFactory: p2pFactory

                    });
                }));

            it('it should ensure that users have the correct initial error message', function () {
                expect(scope.error).to.deep.equal('');
            });

            it('it should ensure that the correct error message is there when the user does not have enough funds to pay', function () {

                expect(scope.error).to.deep.equal('');
                scope.accounts=accounts;
                scope.payToAccount=paymentOptions[2];

                scope.initatePayment(scope.accounts[1], 2000);
                expect(scope.error).to.deep.equal('You do not have the necessary funds');
                scope.initatePayment(scope.accounts[1], 10);
                expect(scope.error).to.deep.equal('');
            });

        });

        describe("A p2p Add Test", function(){
            beforeEach(
                inject(function($controller, $rootScope, p2pFactory, $state){
                    factory = p2pFactory;
                    scope = $rootScope.$new();
                    state=$state;
                    p2pAddController = $controller('p2pAddNewRecController',{
                        $scope: scope,
                        p2pFactory: p2pFactory
                    });
                }));

            it('it should ensure that users have the correct initial error message', function () {
                expect(scope.error).to.deep.equal('');
            });

            it('should log error if there are any missing fields', function(){
                scope.$parent.paymentOptions=paymentOptions;
                expect(scope.error).to.deep.equal('');
                var payer={
                    payName:'name',
                    payEmail:'email',
                    payAccountNumber:'12345'
                };

                scope.submitRec(payer);
                expect(scope.error).to.deep.equal('Please check your information and try again');
                var payer2={
                    payName:'',
                    payEmail:'email',
                    payAccountNumber:'1234'
                };
                scope.submitRec(payer2);
                expect(scope.error).to.deep.equal('Please check your information and try again');
                var payer3={
                    payName:'name',
                    payEmail:'email',
                    payAccountNumber:'1234'
                };
                scope.submitRec(payer3);

                expect(scope.error).to.deep.equal('');


            });

            it('should add 1 more to the array after the addition has been completed', function(){
                scope.$parent.paymentOptions=paymentOptions;
                expect(scope.$parent.paymentOptions).to.have.length(5);
                var payer3={
                    payName:'name',
                    payEmail:'email',
                    payAccountNumber:'1234'
                };
                scope.submitRec(payer3);
                expect(scope.$parent.paymentOptions).to.have.length(6);
                expect(scope.$parent.paymentOptions[3].email).to.deep.equal('sales@Trek.com');

            });
        });
//        describe('Directive: albums', function(){
//            var element;
//            beforeEach(module('partials/p2pDirectiveAlbum.html'));
//
//            beforeEach(inject(function($rootScope, $compile){
//                element = angular.element(
//                        '<div class="well span6">'+
//                        '<h3>Busdriver Albums</h3>'+
//                        '<albums ng-repeat = "album in albums" title="{{album.title}}">' +
//                        '</albums></div>'
//                );
//
//                scope=$rootScope;
//
//                scope.albums=[
//                    {
//                        'title':'Memoirs of the Elephant man'
//                    },
//                    {
//                        'title':'Temporary Forever'
//                    },
//                    {
//                        'title':'Cosmic Cleavage'
//                    },
//                    {
//                        'title':'Fear of a Black Tangent'
//                    },
//                    {
//                        'title':'Jhelli Beam'
//                    }
//                ];
//                $compile(element)(scope);
//                scope.$digest();
//            }));
//
//            it('should have the correct number of albums', function(){
//                var list = element.find('li');
//                expect(list).to.have.length(5);
//            });
//        });

    });
});