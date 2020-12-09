  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//document.addEventListener("click", theClickFunction)

//function theClickFunction() {

//var n = document.getElementById("horse1").src

//};
var uni0number = 0
var uni1number = 0
var uni2number = 0
function changeImage1() {
console.log(document.getElementById("horse1").src);
var uni0 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-0.png'
//var uni0 = "./images/unicorn-0.png"
var uni1 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-1.png'
//var uni1e = "./images/unicorn-1.png"
var uni2 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-2.png'
//var uni2 = "./images/unicorn-2.png"
var uni3 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-3.png'
//var uni3plane = "./images/unicorn-3.png"

  if (uni0number === 0 && document.getElementById("horse1").src == uni0)
    {
            document.getElementById("horse1").src = uni1;
            uni0number ++
            console.log(uni0number)
        }
        else if (uni0number === 1 && document.getElementById("horse1").src == uni1){
          document.getElementById("horse1").src = uni2;
          uni0number ++
          console.log(uni0number)
        } else if (uni0number === 2 && document.getElementById("horse1").src == uni2)
        {
          document.getElementById("horse1").src = uni3;
          uni0number ++
          console.log(uni0number)
        } else if (uni0number === 3 && document.getElementById("horse1").src == uni3){
          uni0number ++
          console.log(uni0number)
            alert('Unicorn Number 1 says thank you!');
        } else if (uni0number === 4){
        alert('Unicorn Number 1 says thank you!');
          console.log(uni0number)
          return
        }


};

function changeImage2() {

  var uni0 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-0.png'
  //var uni0 = "./images/unicorn-0.png"
  var uni1 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-1.png'
  //var uni1e = "./images/unicorn-1.png"
  var uni2 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-2.png'
  //var uni2 = "./images/unicorn-2.png"
  var uni3 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-3.png'
  //var uni3plane = "./images/unicorn-3.png"

  if (uni1number === 0 && document.getElementById("horse2").src == uni0)
    {
            document.getElementById("horse2").src = uni1;
            uni1number ++
            console.log(uni1number)
        }
        else if (uni1number === 1 && document.getElementById("horse2").src == uni1){
          document.getElementById("horse2").src = uni2;
          uni1number ++
          console.log(uni1number)
        } else if (uni1number === 2 && document.getElementById("horse2").src == uni2)
        {
          document.getElementById("horse2").src = uni3;
          uni1number ++
          console.log(uni1number)
        } else if (uni1number === 3 && document.getElementById("horse2").src == uni3){
          uni1number ++
          console.log(uni1number)
            alert('Unicorn Number 2 says thank you!');
        } else {
          alert('Unicorn Number 2 says thank you!');
          console.log(uni1number)
          return
        }

  };





function changeImage3() {

  var uni0 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-0.png'
  //var uni0 = "./images/unicorn-0.png"
  var uni1 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-1.png'
  //var uni1e = "./images/unicorn-1.png"
  var uni2 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-2.png'
  //var uni2 = "./images/unicorn-2.png"
  var uni3 = 'https://mariano-zeppa.github.io/inflate-the-unicorn/images/unicorn-3.png'
  if (uni2number === 0 && document.getElementById("horse3").src == uni0)
    {
            document.getElementById("horse3").src = uni1;
            uni2number ++
            console.log(uni2number)
        }
        else if (uni2number === 1 && document.getElementById("horse3").src == uni1){
          document.getElementById("horse3").src = uni2;
          uni2number ++
          console.log(uni2number)
        } else if (uni2number === 2 && document.getElementById("horse3").src == uni2)
        {
          document.getElementById("horse3").src = uni3;
          uni2number ++
          console.log(uni2number)
        } else if (uni2number === 3 && document.getElementById("horse3").src == uni3){
          uni2number ++
          console.log(uni2number)
            alert('Unicorn Number 3 says thank you!');
        } else {
          alert('Unicorn Number 3 says thank you!');
          console.log(uni2number)
          return
        }


  };
