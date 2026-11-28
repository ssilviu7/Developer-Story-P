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
    if (!game || !game.player) return;

    if (
      [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      e.preventDefault();
    }
    if (e.key === "ArrowUp") {
      game.player.moveUp();
    }
    if (e.key === "ArrowDown") {
      game.player.moveDown();
    }
    if (e.key === "ArrowLeft") {
      game.player.moveLeft();
    }
    if (e.key === "ArrowRight") {
      game.player.moveRight();
    }
    if (e.key === " ") {
      game.shoot();
    }
  });
});
