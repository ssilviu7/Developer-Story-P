class Game {
  constructor() {
    this.startScreen = document.querySelector(".startScreen");
    this.gameScreen = document.querySelector(".gameScreen");
    this.loseScreen = document.querySelector(".loseScreen");
    this.winScreen = document.querySelector(".winScreen");
    this.player = null;
    this.enemies = []
    this.enemyInterval = null
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.player = new Player();

    this.enemyInterval = setInterval(()=>{
      this.spawnEnemy()
    }, 2000)
  }
spawnEnemy(){
  if (this.enemies.length <= 6)
  this.enemies.push(new Enemy())
}
}
