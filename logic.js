let firstScore = document.querySelector('#firstScore').textContent;
let secondScore = document.querySelector('#secondScore').textContent;
let boxes = document.querySelectorAll('.box');
let restartBtn = document.querySelector('button');
var array = [
    '', '', '',
    '', '', '',
    '', '', ''
]

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        let sign = checkState();
        boxes[i].textContent = sign;
        array[i] = sign;
        
    }, {once: true}) // once true makes it so it can only get clicked once
}

let gameboardArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

var player = (sign, state) => {

    this.changeState = function(){
        if(this.state === true){
            this.state = false;
        } else {
            this.state = true;
        }
    }

    return { sign, state, changeState};
}

function checkState(){
    let sign;
    if(firstPlayer.state === true){
        sign = firstPlayer.sign;
    } else {
        sign = secondPlayer.sign; 
    }

    firstPlayer.changeState();
    secondPlayer.changeState();

    return sign;
}

var firstPlayer = player('X', true);
var secondPlayer = player('O', false);

