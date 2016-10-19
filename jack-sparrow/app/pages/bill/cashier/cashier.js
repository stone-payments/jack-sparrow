/*
    @author:Marcelo 
*/
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.bill.cashier',[])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('bill.cashier', {
                url: '/cashier',
                templateUrl: 'app/pages/bill/cashier/cashier.html',
                title: 'Cashier',
                controller: 'CashierController',
                sidebarMeta: {
                    order: 802,
                },
            });
    }

    
})();