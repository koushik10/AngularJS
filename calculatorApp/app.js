

var app = angular.module("calculatorApp", []);
app.controller("CalculatorCtrl", CalculatorCtrl);

function CalculatorCtrl(){

this.buttonClicked = function(button) {
    this.resultValue=0;
    this.selectedOperation = button;
     
}

    this.result = function(){
        var number1 = parseFloat(this.num1);
        var number2 = parseFloat(this.num2);

        if(this.selectedOperation == "+"){
            this.resultValue=number1 + number2;
        }
            else if(this.selectedOperation == "-"){
                this.resultValue=number1 - number2;
            }
            else if(this.selectedOperation == "*"){
                this.resultValue=number1 * number2;
            }
            else if(this.selectedOperation == "/"){
                this.resultValue=number1 / number2;
            }
    }
}
//.add = function(){
//.num1="";
//.num2="";
//.num3=num1+num2;
