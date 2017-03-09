var app = angular.module("myHelloModule", []);

app.controller("HelloCtrl", HelloCtrl);

function HelloCtrl(){

    this.message = " This is myHelloModule";
}