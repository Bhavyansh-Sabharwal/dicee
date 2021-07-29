var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

document.querySelector(".dice .img1").setAttribute("src", "images/dice" + String(randomNumber1) + ".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + String(randomNumber2) + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🏆";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
