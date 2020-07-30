angular.module('app',['ngRoute']);

//angular.module('app', ['menu', 'contatos']).config(function($routeProvider){
//    $routeProvider.when('/menu',{
//        templateUrl: 'partials/menu.html',
//        controller: 'MenuController'
//    });
//});

var app1 = angular.module('contatos', [ ])

var app2 = angular.module('menu', [ ])

var app = angular.module('app', [app1, app2, 'ngRoute']);

//angular.module('ifsp',['ngRoute']).config(function($routeProvider){
//    $routeProvider.when('/contato/:contatoId',{
//        templateUrl: 'partials/contatos.html',
//        controller: 'ContatoController'
//    });
//});
