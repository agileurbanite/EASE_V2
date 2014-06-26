/**
 * Created by yuchennie on 6/23/14.
 */
define(['./billPay-module','./billPay-services'], function(module){
    module.
        directive('albums', function(){
            return{
                templateUrl:'partials/p2pDirectiveAlbum.html',
                restrict:'E',
                scope:{}
            }
        });
});