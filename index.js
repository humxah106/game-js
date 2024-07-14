var randomNumber1 = math.floor(math.random() * 6) + 1;
var randomImageDice = "images/images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageDice);

var randomNumber2 = math.floor(math.random() * 6) + 1;
var randomImageDice2 = "images/images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
