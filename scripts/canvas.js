import { balls } from "./main.js";

const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

export const width = canvas.width = window.innerHeight;
export const height = canvas.height = window.innerHeight;

export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
//Cambio. Cambio de color de la pagina, de verde a negro
export function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball === otherBall) { //CAMBIO. Tiene que ser igual las direcciones de la bola para cambiar de color
                ball.collisionDetect(otherBall);
            }
        }
    }
    requestAnimationFrame(loop);
}