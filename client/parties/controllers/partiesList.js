angular.module("angular_meteor").controller("PartiesListCtrl", ['$scope', '$meteorCollection',
  function($scope, $meteorCollection){

    $scope.parties = $meteorCollection(Parties);

    $scope.remove = function(party){
      $scope.parties.splice( $scope.parties.indexOf(party), 1 );
    };

}]);