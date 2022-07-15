var location = 3;
var location = 4;
var location = 5;

var guess; //undefine
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
     guess = prompt('Ns готов выстрелить? (введи цифру 0-6;');
     if(guess < 0 || guess > 6){
     	alert('ну еб твою мать я просил от 0 до 6!!!');
     } else{
     	guesses = guesses + 1;
     }
}