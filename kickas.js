// declarations 
var inputMax = document.getElementById('inputMax')
var inputAddMax = document.getElementById('inputAddMax')

var btnStart = document.getElementById('btnStart')

var humanInput = document.getElementById('humanInput')
var humanOutput = document.getElementById('humanOutput')
var humanChoice = document.getElementById('humanChoice')

var machineChoice = document.getElementById('machineChoice')
var machineOutput = document.getElementById('machineOutput')

var sumOutput = document.getElementById('sumOutput')

var trophie = document.getElementsByClassName('fas fa-trophy')

var machine = "machine";
var human = "human";
var currPlayer = "";
var sum = 0;
var machineRandom = 0;


function getRandom(from, to) {
    return Math.floor(Math.random() * to) + from
}

// functions pre-game 
function showGame() {
    if (inputAddMax.value == 9 && inputMax.value == 100) {
        document.getElementById('game').style.display = 'block';
        startGame()
        btnStart.disabled = true;
    }
}

function startGame() {
    var whoIsFirst = getRandom(1, 2)
    if (whoIsFirst === 1) {

        humanTurn()
        currPlayer = human

    } else

        machineTurn()
    currPlayer = machine

}



function humanTurn() {

    machineChoice.disabled = true;
    humanChoice.disabled = false;
    if (+humanInput.value != "" && +humanInput.value <= +inputAddMax.value) {
        humanOutput.innerHTML = "Human's choice is " + +humanInput.value

        currPlayer = human
        sum = sum + +humanInput.value
        sumOutput.innerHTML = "Sum is " + sum 

        humanChoice.disabled = true;
        machineChoice.disabled = false;

        if (sum >= +inputMax.value) {
            sumOutput.innerHTML = "Human is winner!"
        }
    }
else {humanOutput.innerHTML = "Please enter a number from 0 to " + inputAddMax.value}
    

}
var numOfTrials = 0;

// ПОПЫТКА ВЫИГРЫШНОЙ СТРАТЕГИИ ДЛЯ КОМПЬЮТЕРА

 function machineTurn() {
    numOfTrials++ 
    humanChoice.disabled = true;
    machineChoice.disabled = false;
    currPlayer = machine

    if (sum === 0) {
        machineRandom = getRandom(1, +inputAddMax.value);
        machineOutput.innerHTML = "Machine's choice is " + machineRandom
        sum = sum + machineRandom 
        sumOutput.innerHTML = "Sum is " + sum
    }
    else {
        machineRandom = (10 * numOfTrials) - sum
        if (machineRandom > +inputAddMax.value) {machineRandom = getRandom(1, +inputAddMax.value)}
        else 
        machineOutput.innerHTML = "Machine's choice is " + machineRandom
        sum = sum + machineRandom 
        sumOutput.innerHTML = "Sum is " + sum
    }
    machineChoice.disabled = true;
    humanChoice.disabled = false;

    if (sum >= +inputMax.value) {
        sumOutput.innerHTML = "Machine is winner"
    }

} 
// EventListeners 


btnStart.addEventListener('click', showGame)
machineChoice.addEventListener('click', machineTurn)
humanChoice.addEventListener('click', humanTurn)


// CSS 

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  