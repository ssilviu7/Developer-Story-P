class Game {
  constructor() {
    this.startScreen = document.querySelector(".startScreen");
    this.gameScreen = document.querySelector(".gameScreen");
    this.loseScreen = document.querySelector(".loseScreen");
    this.winScreen = document.querySelector(".winScreen");
    this.player = null;
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.player = new Player();
  }
}
