/*
    @author:Marcelo 
*/
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.bill',
        [
            'BlurAdmin.pages.bill.cashier',
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('bill', {
                url: '/bill',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'Bill',
                sidebarMeta: {
                    icon: 'ion-social-usd',
                    order: 801,
                },
            });
    }

})();