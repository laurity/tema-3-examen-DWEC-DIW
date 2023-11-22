import { randomRGB } from "./canvas.js";
import { ctx } from "./canvas.js";
import { height } from "./canvas.js";
import { width } from "./canvas.js";

export class Ball {
    constructor(x, y, velX, velY, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = randomRGB();
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -this.velX;
        }

        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }


    collisionDetect(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

    //La distancia debe de ser mayor que al tamaño de la bola mas la de la otra bola para poder cambiar el color. SI no, esta cambiando de color todo el rato
        if (distance > this.size + otherBall.size) {    

            otherBall.color = this.color = randomRGB();
        }
    }
}
