class Player {
  constructor() {
    this.gameScreen = document.querySelector(".gameScreen");
    this.element = document.createElement("div");
    this.x = 0;
    this.y = 50;
    this.width = 100;
    this.height = 100;
    this.studentimg = "../images/student3.png";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.y}%`;
    this.element.style.left = `${this.x}%`;
    this.element.style.backgroundImage = `url(${this.studentimg})`;

    this.element.style.backgroundPosition = "center";
    this.element.style.backgroundSize = "cover";

    this.gameScreen.appendChild(this.element);
  }

  moveDown() {
    if (this.y <= 86) {
      this.y += 2;
      this.element.style.top = `${this.y}%`;
    }
  }

  moveUp() {
    if (this.y >= 1) {
      this.y -= 2;
      this.element.style.top = `${this.y}%`;
    }
  }

  moveLeft() {
    if (this.x >= 0) {
      this.x -= 2;
      this.element.style.left = `${this.x}%`;
    }
  }

  moveRight() {
    if (this.x <= 82) {
      this.x += 2;
      this.element.style.left = `${this.x}%`;
    }
  }
}
