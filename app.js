(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);
    
    // function DIController ($scope,
    //                        $filter,
    //                        $injector) {
    //   $scope.name = "salh";
    
    //   $scope.upper = function () {
    //     var upCase = $filter('uppercase');
    //     $scope.name = upCase($scope.name);
    //   };
    
    //   console.log($injector.annotate(DIController));
    // }
    
    // function AnnonateMe(name, job, blah) {
    //   return "Blah!";
    // }
    
    // console.log(DIController.toString());
    
    // })();
    DIController.$inject = ['$scope'];
    function  DIController($scope){
      $scope.name = 'mohammad';
      $scope.image = 's';
      $scope.showImage = function(){
        $scope.image='s1';
  
      }
      $scope.sayMessage = function(){
        return 'saud is programmer for php and java scripte and sql';
      }
    }

})();
    