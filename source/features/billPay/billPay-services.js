/**
 * Created by yuchennie on 6/23/14.
 */
define(['./billPay-module'], function(module){
    module.factory('p2pFactory',[function(){
        return{
            checkAdd: function(value){
                if(value.option==1){
                    return true;
                }else{
                    return false;
                }
            },
            validator: function(values){

            },
            checkPaymentAmount: function(payTo, limit){
                if(payTo<limit){
                    return false;
                }
                return true;
            },
            validateNewPayer:function(payer){
                if(!payer){
                    return false;
                } if(!payer.payName || !payer.payEmail || !payer.payAccountNumber){
                    return false;
                }
                else if(payer.payName.length<1 || payer.payEmail.length<1 || payer.payAccountNumber.length!=4){
                    return false;
                }
                return true;
            },
            payAmount: function(payFromAccount, payAmount){
                if(payAmount==0){
                    return false;
                }
                payFromAccount.amount=payFromAccount.amount-payAmount;
                return true;
            }
        };
    }]);
});