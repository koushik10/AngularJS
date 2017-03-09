
var app = angular.module("moreDirectivesApp", []);
app.controller("MoreDirectivesCtrl", MoreDirectivesCtrl);

function MoreDirectivesCtrl(){

    this.myList=[

        {'name' :"foo1", 'age' : 20},
        {'name' :"foo2", 'age' : 24},
        {'name' :"foo3", 'age' : 25},
        {'name' :"foo4", 'age' : 21}
    ];
}