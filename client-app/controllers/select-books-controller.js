angular.module('books-controller-module', [])
    .controller('booksController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

        console.log("booksController ready");

        $scope.books = [];
        // $scope.selectedBooks = [];
        $scope.amount = 0;
        $scope.order = $stateParams.order;

        var getBooks = function () {
            $http.get("/data/books.json")
                .then(function (response) {
                    // $scope.products = response.data;
                    //console.log(response);
                    $scope.books = response.data;

                });
        };
        getBooks();

        $scope.selectBook = function (book) {
            $scope.order.selectedBooks.push(book);
            console.log($scope.order.selectedBooks);
            //console.log(book);
        }

        $scope.cancelBook = function (book) {
            var index = $scope.order.selectedBooks.indexOf(book);

            $scope.order.selectedBooks.splice(index, 1);

        }


    }]);




