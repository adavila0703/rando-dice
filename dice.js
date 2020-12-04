function rollPlayer(){
    return Math.floor(Math.random() * 6);
}

function genDie(die){
    return diceList[die];
}

function rollDice(){
    dieOne.setAttribute('src', genDie(playerOne));
    dieTwo.setAttribute('src', genDie(playerTwo));
        
    if(playerOne === playerTwo){
        return 'Tie!';
    }else if (playerOne > playerTwo) {
        return 'Player 1 Wins!';
    }else{
        return 'Player 2 Wins!'
    }
}

diceList = [
    'images/dice1.png', 
    'images/dice2.png', 
    'images/dice3.png', 
    'images/dice4.png', 
    'images/dice5.png', 
    'images/dice6.png'
];

let playerOne = rollPlayer();
let playerTwo = rollPlayer();
let dieOne = document.querySelectorAll('img')[0];
let dieTwo = document.querySelectorAll('img')[1];
let title = document.querySelector('h1')

title.innerText = rollDice()

