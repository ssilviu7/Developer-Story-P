const startScreen = document.querySelector(".startScreen");
const gameScreen = document.querySelector(".gameScreen");
const loseScreen = document.querySelector(".loseScreen");
const winScreen = document.querySelector(".winScreen");
const startBtn = document.querySelector(".startBtn");

let game;

startBtn.addEventListener("click", () => {
  game = new Game();
  game.startGame()
});
