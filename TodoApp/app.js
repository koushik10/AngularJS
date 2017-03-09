
var app = angular.module("myTodoApp", []);

app.controller("TodoAppCtrl", TodoAppCtrl);

function TodoAppCtrl(){
 
 this.editMode = false;
 this.todos=[
    "gym",
    "breakfast",
    "Library"
 ];

    this.addNewTodo = function() {
        this.todos.push(this.newTodo);
        this.newTodo="";
    }

this.triggerEditTodo = function(){

    this.editMode = !this.editMode;

    this.deleteTodo = function(index) {

        this.todos.splice(index, 1);
    }
}
}