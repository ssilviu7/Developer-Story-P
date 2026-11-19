class Player {
    constructor() {
        this.gameScreen = document.querySelector(".gameScreen")
        this.element = document.createElement("div")
        this.x = 0
        this.y = 50
        this.width = 60
        this.height = 60
        this.studentimg = "../images/student.png"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}%`
        this.element.style.left = `${this.x}%`
        this.element.style.backgroundImage = `url(${this.studentimg})`
    }
}