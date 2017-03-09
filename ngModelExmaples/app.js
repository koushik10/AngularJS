var app = angular.module("ngModelExamples", []);

app.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl($scope){

    $scope.textboxValueChange = function(){

        console.log("text value changed");
    }

}