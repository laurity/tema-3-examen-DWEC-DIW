import { Ball } from './clase.js'
import { random } from './canvas.js'
import { loop } from './canvas.js'

export const balls = [];

while (balls.length < 25) { //CAMBIO en el número de bolas
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    );

    balls.push(ball);
}

loop();