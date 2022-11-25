let winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]
var firstScore = document.querySelector('#firstScore').textContent;
var secondScore = document.querySelector('#secondScore').textContent;
var boxes = document.querySelectorAll('.box');
var restartBtn = document.querySelector('button');


restartBtn.addEventListener('click', function(){
    getReady();
    if(firstPlayer.getState() === false){
        changeBoth();
    }
});

function getReady(){
    mainArray = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', function(){
            let sign = checkState();
            boxes[i].textContent = sign;
            mainArray[i] = sign;
            checkGame();
        }, {once: true}) // once true makes it so it can only get clicked once
    }
}

function changeBoth(){
    firstPlayer.changeState();
    secondPlayer.changeState();
}

function checkState(){
    let mark;
    if(firstPlayer.getState() === true){
        mark = firstPlayer.sign;
    } else {
        mark = secondPlayer.sign; 
    }
    changeBoth();
    return mark;
}

function checkGame(sign = null){
    if(checkWin(sign)){
        if(firstPlayer.getState){
           console.log(`The Winner is: ${secondPlayer.sign} player`); 
        } else {
            console.log(`The Winner is: ${firstPlayer.sign} player`); 
        } 
    } else if(sign === null) {
        if(checkDraw(mainArray)){
            console.log('The game ends in a draw');
        }
    }
}

function checkWin(sign){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return mainArray[index] == sign; 
        })
        // if(combination[0] == sign && combination[1] == sign && combination[2] == sign){
        //     return true;
        // }
    })
}

function checkDraw(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] != 'X' && array[i] != 'O'){
            return false;
        }
    }
    return true;
}


let player = (sign, state) => {
    let score = 0;

    this.changeScore = function(){
        score++;
    }

    let getScore = () => console.log(score); //nuk kthehet score 
    let getState = () => console.log(state); // nuk kthete state

    this.changeState = function(){
        if(this.getState() === true){
            this.getState() = false;
        } else {
            this.getState() = true;
        }
    }
    
    return { sign, getState, getScore, changeScore, changeState};
    // nese ishin kthy score ose state atehere kishim mund me i ndryshu
    // prej jashtit
}

var firstPlayer = player('X', true);
var secondPlayer = player('O', false);
getReady();