class Game {
  constructor() {
    this.startScreen = document.querySelector(".startScreen");
    this.gameScreen = document.querySelector(".gameScreen");
    this.loseScreen = document.querySelector(".loseScreen");
    this.winScreen = document.querySelector(".winScreen");
    this.player = null;
    this.enemies = [];
    this.enemyInterval = null;
    this.animationInterval = null;
  }

  startGame() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.player = new Player();

    this.enemyInterval = setInterval(() => {
      this.spawnEnemy();
    }, 2000);

    this.animationInterval = setInterval(() => {
      this.animate();
    }, 20);
  }
  animate() {
    this.enemies.forEach((enemy, i) => {
      if (enemy.x <= 0) {
        this.enemies.splice(i, 1);
        enemy.element.remove();
      }
      enemy.move();
      this.checkCollision(this.player, enemy);
    });
  }

  spawnEnemy() {
    if (this.enemies.length <= 6) this.enemies.push(new Enemy());
  }

  checkCollision(player, enemy) {
    if (
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    ) {
      clearInterval(this.enemyInterval);
      clearInterval(this.animationInterval);
      this.gameOver();
    }
  }
  gameOver() {
    this.gameScreen.style.display = "none";
    this.loseScreen.style.display = "flex";
  }
}
