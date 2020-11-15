// declarations 
var inputMax = document.getElementById('inputMax')
var inputAddMax = document.getElementById('inputAddMax')

var btnStart = document.getElementById('btnStart')

var human1Input = document.getElementById('humanInput')
var human1Output = document.getElementById('humanOutput')
var human1Choice = document.getElementById('humanChoice')

var human2Input = document.getElementById('human2Input')
var human2Choice = document.getElementById('human2Choice')
var human2Output = document.getElementById('human2Output')

var sumOutput = document.getElementById('sumOutput')



var human1 = "human1";
var human2 = "human2";
var currPlayer = "";
var sum = 0;



function getRandom(from, to) {
    return Math.floor(Math.random() * to) + from
}

// functions pre-game 
function showGame() {
    if (inputAddMax.value > inputMax.value) {
        document.getElementById('game').style.display = 'block';
        startGame()
        btnStart.disabled = true;
    }
}

function startGame() {
    var whoIsFirst = getRandom(1, 2)
    if (whoIsFirst === 1) {

        human1Turn()
        currPlayer = human1

    } else

        human2Turn()
    currPlayer = human2

}



function human1Turn() {

    human1Choice.disabled = true;
    human2Choice.disabled = false;

    if (+human1Input.value != "" && +human1Input.value <= +inputAddMax.value) {
        human1Output.innerHTML = "Player 1 chosed " + +human1Input.value

        currPlayer = human1
        sum = sum + +human1Input.value
        sumOutput.innerHTML = "Sum is " + sum 

        human1Choice.disabled = true;
        human2Choice.disabled = false;

        if (sum >= +inputMax.value) {
            sumOutput.innerHTML = "Player 1 is winner!"
        }
    }
else {human1Output.innerHTML = "Please enter a number from 0 to " + inputAddMax.value}
    

}

function human2Turn() {
    human2Choice.disabled = true;
    human1Choice.disabled = false;
    
    if (+human2Input.value != "" && +human2Input.value <= +inputAddMax.value) {
        human2Output.innerHTML = "Player 2 choosed " + +human2Input.value

        currPlayer = human2
        sum = sum + +human2Input.value
        sumOutput.innerHTML = "Sum is " + sum 

        human2Choice.disabled = true;
        human1Choice.disabled = false;

        if (sum >= +inputMax.value) {
            sumOutput.innerHTML = "Player 2 is winner!"
        }
    }
else {human2Output.innerHTML = "Please enter a number from 0 to " + inputAddMax.value}
    

}
// EventListeners 


btnStart.addEventListener('click', showGame)
human2Choice.addEventListener('click', human2Turn)
human1Choice.addEventListener('click', human1Turn)


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

  