var app = angular.module("clockApp", []);
app.controller("TimeCtrl", TimeCtrl);

function TimeCtrl($scope) {

    var currentDate = new Date();
    $scope.userName = "";
    $scope.timeString = currentDate.toTimeString();
    $scope.updateTime = function() {
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString(); 
    }

}     