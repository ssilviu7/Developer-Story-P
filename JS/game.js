class Game {
  constructor() {
    this.startScreen = document.querySelector(".startScreen");
    this.gameScreen = document.querySelector(".gameScreen");
    this.loseScreen = document.querySelector(".loseScreen");
    this.winScreen = document.querySelector(".winScreen");
    this.livesElement = document.querySelector(".livesDisplay");
    this.player = null;
    this.enemies = [];
    this.enemyInterval = null;
    this.animationInterval = null;
    this.lives = 3;
    this.updateHearts();
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

  updateHearts() {
    const remainingLives = Math.max(0, this.lives);
    const lostLives = 3 - remainingLives;
    this.livesElement.textContent =
      "💚".repeat(remainingLives) + "🖤".repeat(lostLives);
  }

  animate() {
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      if (enemy.x <= 0) {
        this.enemies.splice(i, 1);
        enemy.element.remove();
        continue;
      }
      enemy.move();
      this.checkCollision(this.player, enemy);
    }
  }

  spawnEnemy() {
    if (this.enemies.length <= 6) this.enemies.push(new Enemy());
  }

  checkCollision(player, enemy) {
    const p = player.element.getBoundingClientRect();
    const e = enemy.element.getBoundingClientRect();
    if (
      p.left < e.right &&
      p.right > e.left &&
      p.top < e.bottom &&
      p.bottom > e.top
    ) {
      this.lives--;
      this.updateHearts();
      enemy.element.remove();

      if (this.lives <= 0) {
        clearInterval(this.enemyInterval);
        clearInterval(this.animationInterval);
        this.gameOver();
        console.log(player.x, player.width, enemy.x, enemy.width);
      }
    }
  }
  gameOver() {
    this.gameScreen.style.display = "none";
    this.loseScreen.style.display = "flex";
  }
}
