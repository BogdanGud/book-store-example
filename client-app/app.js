angular.module('appModule', ['ui.router', 'books-controller-module'])
    .config(function ($stateProvider, $locationProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/templates/home.html'
        }).state('booksList', {
            params: {
                order: {
                    selectedBooks: [],
                    shippingInfo : {}
                }
            },
            url:'/books-list',
            templateUrl: '/templates/books-list.html',
            controller: 'booksController'
        }).state('shipping', { 
            url:'/shipping',
            params: {
                order: {
                    selectedBooks: [],
                    shippingInfo : {}
                }
            },
            templateUrl: '/templates/shipping.html',
            controller: 'booksController'
        });


        $locationProvider.html5Mode(true);
    });


angular.element(document).ready(function () {
    angular.bootstrap(document, ['appModule']);


});


