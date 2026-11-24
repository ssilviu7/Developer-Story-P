class Enemy {
  constructor() {
    this.gameScreen = document.querySelector(".gameScreen");
    this.element = document.createElement("div");
    this.x = 96;
    this.y = Math.floor(Math.random() * 95);
    this.width = 50;
    this.height = 50;
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
}
