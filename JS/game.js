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
    this.projectiles = [];
    this.score = 0;
    this.scoreElement = document.querySelector(".scoreDisplay");
    this.updateScore();
  }

  updateScore() {
    this.scoreElement.textContent = `Score: ${this.score}`;
  }

  shoot() {
    const startX = this.player.x + 3;
    const startY = this.player.y + 4;

    const projectile = new Projectile(startX, startY);
    this.projectiles.push(projectile);
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
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const projectile = this.projectiles[i];
      projectile.move();

      if (projectile.x > 100) {
        projectile.element.remove();
        this.projectiles.splice(i, 1);
      }

      for (let j = this.enemies.length - 1; j >= 0; j--) {
        const enemy = this.enemies[j];

        if (this.isColliding(projectile, enemy)) {
          projectile.element.remove();
          this.projectiles.splice(i, 1);

          enemy.element.remove();
          this.enemies.splice(j, 1);

          this.score += 10;
          this.updateScore();

          break;
        }
      }
    }

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
      const index = this.enemies.indexOf(enemy);
      if (index > -1) this.enemies.splice(index, 1);

      if (this.lives <= 0) {
        clearInterval(this.enemyInterval);
        clearInterval(this.animationInterval);
        this.gameOver();
        console.log(player.x, player.width, enemy.x, enemy.width);
      }
    }
  }

  isColliding(objA, objB) {
    const a = objA.element.getBoundingClientRect();
    const b = objB.element.getBoundingClientRect();

    return (
      a.left < b.right &&
      a.right > b.left &&
      a.top < b.bottom &&
      a.bottom > b.top
    );
  }

  gameOver() {
    const finalScoreElement = document.querySelector(".finalScore");
    finalScoreElement.textContent = `Final Score: ${this.score}`;

    if (this.player) this.player.element.remove();
    this.enemies.forEach((enemy) => enemy.element.remove());
    this.projectiles.forEach((projectile) => projectile.element.remove());

    this.gameScreen.style.display = "none";
    this.loseScreen.style.display = "flex";
  }
}
