angular.module("angular_meteor").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('parties', {
        url: '/parties',
        templateUrl: 'client/parties/partials/parties-list.tpl',
        controller: 'PartiesListCtrl'
      })
      .state('partyDetails', {
        url: '/parties/:partyId',
        templateUrl: 'client/parties/partials/party-details.tpl',
        controller: 'PartyDetailsCtrl'
      });

    $urlRouterProvider.otherwise("/parties");
  }]);