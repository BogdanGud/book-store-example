angular.module('shipping-controller', [])
    .controller('shippingController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

        console.log("shippingController ready");
        $scope.order = $stateParams.order;

    }]);