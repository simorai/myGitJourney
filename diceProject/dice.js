//first dice image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // rolls from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //iterates from dice1.png to dice6.png

var randomImageSource = "/diceProject/dicePng/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// **************************************************************************************************//
//second dice image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "/diceProject/dicePng/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player one wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player two wins";
} else {
  document.querySelector("h1").innerHTML = "draw!!";
}
