var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess; //undefine
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
     guess = prompt('ты готов выстрелить? (введи цифру 0-6)');
     if(guess < 0 || guess > 6){
     	alert('ну еб твою мать я просил от 0 до 6!!!');
     } else{
     	guesses = guesses + 1;
     	if(guess == location1 || guess == location2 || guess == location3){
            hits = hits +1;
            if(hits == 3){
              isSunk = true;
              alert('ты победил (хорош)')
            }
     	}else{
     		alert('мозила ахахаха');
     	}
     }
}
var status = 'вы выстрелили ' + guesses + ' для того чтобы попасть по кораблю, ' + 
'это показывает уровень твоей точности, как: ' + (3/guesses);
alert(status);