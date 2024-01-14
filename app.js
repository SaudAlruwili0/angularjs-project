
(function(){
//   use strict للحماية من تعريف المتغيرات تكون داخلية فقط
    'use strict';
   angular.module('nameCalculator',[])
    .controller('NameCaculatorController',function($scope){
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = function(){
               var totalValue = calculatNumericForString($scope.name);
               $scope.totalValue = totalValue; 
            };
            function calculatNumericForString(string){
                var totalStringValue = 0;
                for( var i=0 ; i< string.length; i++){
                    totalStringValue+= string.charCodeAt(i);
                
                }
                return totalStringValue;
            }
        });
})();