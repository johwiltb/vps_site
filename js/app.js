(function() {
  'use strict';

  angular.module('VPSSite', [])

  .controller('VPSSiteController', VPSSiteController);

  VPSSiteController.$inject = ['$scope', '$http'];
  function VPSSiteController($scope, $http) {
    $scope.data = "";
    $scope.table = "";
    $scope.displayData=true;

    $scope.getVideos = function () {
      $scope.displayData=false;
      $http.get('videos.json')
      .success(function(data, status, headers, config) {
        // Called when the response is available
        $scope.data = "Click the Links Below";
        $scope.table = data;
      })
      .error(function(data, status, headers, config) {
        $scope.data = "Can't find videos! I'm sorry :()";
      })
    }

    $scope.getOutlines = function () {
      $scope.displayData=false;
      $http.get('outlines.json')
      .success(function(data, status, headers, config) {
        // Called when the response is available
        $scope.data = "Click the Links Below";
        $scope.table = data;
      })
      .error(function(data, status, headers, config) {
        $scope.data = "Can't find outlines! I'm sorry :(";
      })
    }
  }
})();
