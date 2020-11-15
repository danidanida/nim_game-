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

var reminder = 0;
var max = 0;
var addMax = 0;

var cycleSize = 0; 

var isCompFirst, compNumber, firstNumberToAdd

function getRandom(from, to) {
    return Math.floor(Math.random() * to) + from
}

// functions pre-game 
function showGame() {
    if (+inputAddMax.value < +inputMax.value) {
        document.getElementById('game').style.display = 'block';
        max = +inputMax.value
        addMax = +inputAddMax.value
        startGame()
        btnStart.disabled = true;
        return max, addMax
    }
}

function startGame() {
    cycleSize = addMax + 1  
    reminder = max % cycleSize;
    if (reminder > 0) {
        isCompFirst = true
        currPlayer = machine
        compNumber = reminder
        firstNumberToAdd = reminder
        machineTurn()
    } else {
        isCompFirst = false
        currPlayer = human 
        firstNumberToAdd = 0
        humanTurn()
    }
    return compNumber, firstNumberToAdd
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


 function machineTurn() {

    humanChoice.disabled = true;
    machineChoice.disabled = false;
    currPlayer = machine

    compNumber = cycleSize - ((sum - firstNumberToAdd) % cycleSize)

if (compNumber > cycleSize) {compNumber = compNumber - cycleSize}
else if (compNumber === cycleSize) {compNumber = 1 }

        machineOutput.innerHTML = "Machine's choice is " + compNumber
        sum = sum + compNumber 
        sumOutput.innerHTML = "Sum is " + sum

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

  