class Projectile {
    constructor(x, y) {
        this.gameScreen = document.querySelector(".gameScreen");
        this.element = document.createElement("div");
        this.element.classList.add("projectile");

        this.x = x;
        this.y = y;
        this.speed = 1.5;

        this.element.style.left = `${this.x}%`;
        this.element.style.top = `${this.y}%`;

        this.gameScreen.appendChild(this.element);
    }
    move() {
        this.x += this.speed;
        this.element.style.left = `${this.x}%`;
    }
}