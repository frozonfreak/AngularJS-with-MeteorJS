angular.module("angular_meteor").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteorObject',
  function($scope, $stateParams, $meteorObject){

    $scope.party = $meteorObject(Parties, $stateParams.partyId, false);

        $scope.save = function() {
          $scope.party.save().then(function(numberOfDocs){
            console.log('save success doc affected ', numberOfDocs);
          }, function(error){
            console.log('save error', error);
          });
        };

        $scope.reset = function() {
          $scope.party.reset();
        };

}]);