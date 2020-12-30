// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


// function addImgRandom(){
//   n.innerHTML = '';
//   var n = randomCell;
//   n.innerHTML="<img src='styles/mole.png' />";
//
//   //add image on
//
// }

console.log("Whack-a-Mole!")
var counter = 0;
var gameBoard = document.getElementById("grilla")
//console.log(gameBoard.rows[3].cells[1]);

var randomIndex = getRandomInt(0, 5);
//var randomCell = cellsArray[randomIndex];


function getRandom() {
return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(randomIndex);

//console.log(randomCell);
//gameBoard.rows[randomIndex].cells[randomIndex]
function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.removeAttribute("id");
  element.removeAttribute("onclick")
  addImgRandom();
}


addImgRandom();




function addImgRandom(){

if(document.getElementById("hole")){
removeElement('hole');
} else {
var gameBoard = document.getElementById("grilla")
var randomIndex = getRandom();
var randomIndex1 = getRandom();
var n = gameBoard.rows[randomIndex].cells[randomIndex1]
n.setAttribute("id", "hole");
n.setAttribute('onClick', "addImgRandom();")

var audio = new Audio();
audio.src = "whack-audio.wav";
audio.play();


document.getElementById("counternumber").innerHTML = counter;
counter ++;
}
}


var seconds = 0;
var el = document.getElementById('seconds-counter');
let clock = document.getElementById('timer');
var highscore = 0;
document.getElementById("highscore").innerHTML = highscore;
if (counter == 5) {
console.log(counter);
}
function incrementSeconds() {
  seconds += 1;
  el.innerText = seconds;
  if (seconds == 11){
    counter = counter - 1;
    alert('Congrats! You killed ' + counter + ' Moles');
    location.reload();
    document.getElementById("highscore").innerHTML = counter;
  }

}

var cancel = setInterval(incrementSeconds, 1000);

clock.addEventListener("click", function(){

});
