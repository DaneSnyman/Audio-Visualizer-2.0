import { Circle } from "./circle";
import { Shape } from "./shape";
import { randomNum, randomPosNeg } from "./utilities";

class Swarm {
  swarmArr: Circle[] = [];
  nAmount: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    nAmount: number
  ) {
    this.nAmount = nAmount;
    this.canvas = canvas;
    this.ctx = ctx;
    this.spawnSwarm();
  }

  private spawnSwarm(): void {
    console.log(this.canvas.width);
    for (let i = 0; i < this.nAmount; i++) {
      const r = randomNum(50);
      const x = randomNum(this.canvas.width - r, r);
      const y = randomNum(this.canvas.height - r, r);
      const sX = randomPosNeg(randomNum(5, 1));
      const sY = randomPosNeg(randomNum(5, 1));
      this.swarmArr.push(new Circle(this.canvas, this.ctx, x, y, r, sX, sY));
    }
  }

  update(bufferAverage: number): void {
    this.swarmArr.forEach((member) => {
      // member.update();
      // const random = randomNum(bufferAverage / 10, bufferAverage / 15);
      member.rain(bufferAverage / 15);
    });
  }
}
export { Swarm };
