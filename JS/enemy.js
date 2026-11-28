class Enemy {
  constructor() {
    this.gameScreen = document.querySelector(".gameScreen");
    this.element = document.createElement("div");
    this.x = 96;
    this.y = Math.floor(Math.random() * 95);
    this.width = 75;
    this.height = 75;
    this.enemyimage = "../images/errorenemy.png";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.y}%`;
    this.element.style.left = `${this.x}%`;
    this.element.style.backgroundImage = `url(${this.enemyimage})`;

    this.element.style.backgroundPosition = "center";
    this.element.style.backgroundSize = "cover";

    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.x -= 0.8;
    this.element.style.left = `${this.x}%`;
  }
}
