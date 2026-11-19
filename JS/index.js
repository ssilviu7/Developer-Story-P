const startScreen = document.querySelector(".startScreen");
const gameScreen = document.querySelector(".gameScreen");
const loseScreen = document.querySelector(".loseScreen");
const winScreen = document.querySelector(".winScreen");
const startBtn = document.querySelector(".startBtn");

let game;

window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
  });

  document.addEventListener("keydown", (e) => {
    console.log(e.key);
  });
});
