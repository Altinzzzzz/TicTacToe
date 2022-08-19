var main = document.querySelector('.container');
var pF = document.querySelectorAll('.areasTTT');
var player = true;
var turn = 1;

var playField = Array.from(pF);
var Player1 = new Player('1');
var Player2 = new Player('2');

for(let i = 0; i < playField.length; i++){
    playField[i].addEventListener('click', () => {
        let color;
        if(turn == 1){
            Player1.play(playField[i], 'red');
            turn++;
            Player1.add(Player1, i);
        } else {
            Player2.play(playField[i], 'black');
            turn--;
            Player2.add(Player2, i);
        }
    });
}

Player.prototype.play = function(that, mainColor){
    that.style.backgroundColor = mainColor;
}

Player.prototype.add = function(thePlayer, numri){
    thePlayer.myArray.push(numri);
}

function Player(number){
    this.number = number;
    var myArray = [];
}