  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")
var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
function changeClownHead() {
  if(clothingIndex == 0) {
var head = document.getElementById('head');
head.src = "images/head0.png"
var headSrc = "./images/head" + headIndex + ".png"
headIndex ++
head.src = headSrc
console.log(headIndex);
if(headIndex > 5){
  headIndex = 0 ;
}
} else if (clothingIndex == 1){
  var body = document.getElementById('body');
  body.src = "images/body0.png"
  var bodySrc = "./images/body" + bodyIndex + ".png"
  bodyIndex ++
  body.src = bodySrc
  console.log(bodyIndex);
  if(bodyIndex > 5){
    bodyIndex = 0 ;

}
} else if (clothingIndex == 2){
  var shoes = document.getElementById('shoes');
  shoes.src = "images/shoes0.png"
  var shoesSrc = "./images/shoes" + shoesIndex + ".png"
  shoesIndex ++
  shoes.src = shoesSrc
  console.log(shoesIndex);
  if(shoesIndex > 5){
    shoesIndex = 0 ;

}
}
};

function changeClownLeft() {
  if(clothingIndex == 0) {
var head = document.getElementById('head');
head.src = "images/head0.png"
var headSrc = "./images/head" + headIndex + ".png"
headIndex --
head.src = headSrc
console.log(headIndex);
if(headIndex < 0){
  headIndex = 5 ;
}
} else if (clothingIndex == 1) {
  var body = document.getElementById('body');
  body.src = "images/body0.png"
  var bodySrc = "./images/body" + bodyIndex + ".png"
  bodyIndex --
  body.src = bodySrc
  console.log(bodyIndex);
  if(bodyIndex < 0){
    bodyIndex = 5 ;

}
} else if (clothingIndex == 2){
  var shoes = document.getElementById('shoes');
  shoes.src = "images/shoes0.png"
  var shoesSrc = "./images/shoes" + shoesIndex + ".png"
  shoesIndex --
  shoes.src = shoesSrc
  console.log(shoesIndex);
  if(shoesIndex < 0){
    shoesIndex = 5 ;

}
}
};
var clothingIndex = 0;
var head = document.getElementById('head');
var body = document.getElementById('body');
var shoes = document.getElementById('shoes');

function changeIndexClothesUp() {
clothingIndex ++
if(clothingIndex > 2){
  clothingIndex = 0 ;

}
console.log(clothingIndex)
};
function changeIndexClothesDown() {
clothingIndex --
if(clothingIndex < 0){
  clothingIndex = 2 ;

}
console.log(clothingIndex)
};
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}

//detecting arrow key presses
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
changeClownLeft()
            break;
        case 38:
        changeIndexClothesUp()

            break;
        case 39:
        changeClownHead();

            break;
        case 40:
changeIndexClothesDown()

            break;
    }
});
