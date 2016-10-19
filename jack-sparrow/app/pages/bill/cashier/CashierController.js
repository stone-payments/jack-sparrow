(function () {
    'use strict';

    angular.module('BlurAdmin.pages.bill.cashier').controller('CashierController', ['$scope', '$http', '$timeout', ControlData]);

    function ControlData($scope, $http, $timeout)
    {
        

        //Instancia lista e objetos 
        $scope.products = [];
        $scope.product = [];
        
        //Adiciona linha na grid 
        $scope.addRow = function () {
            $scope.products.push({ 'name': $scope.product.name, 'quantity': $scope.product.quantity, 'value': $scope.product.value });
            $scope.product.name = '';
            $scope.product.value = '';
            $scope.product.quantity = '';
        };


        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                "HOST": "http://localhost:8583"
            }
        };

     
        //Envia transação
        $scope.SendTransaction = function () {
            var objArray = '';
            var obj =
                {
                Language: "en-US",
                RequestKey: "1",
                StoneCode: "167988962",
                PinpadMessages: {
                    ApprovedMessage: "Pagamento Aprovado",
                    DeclinedMessage: "Não deu certo",
                    InitializationMessage: "Oi malandro!",
                    MainLabel: "É gol!!!!",
                    ProcessingMessage: "Vai dar certo",
                    CreditLabel: "Sucesso",
                    DebitLabel: "Debito Sucesso"
                }
                };
            objArray = new Array();
            objArray.push(obj);

            $http({
                url: "http://localhost:8583/microtef/getallpinpads",
                method: "POST",
                data: JSON.stringify(obj),
                header: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });

         



        };

        $scope.progressFunction = function () {
            return $timeout(function () { }, 3000);
        };
    }
})();

