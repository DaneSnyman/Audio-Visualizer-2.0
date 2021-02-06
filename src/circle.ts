import { Shape } from "./shape";
import { randomNum } from "./utilities";

class Circle extends Shape {
  r: number;
  sX: number;
  sY: number;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    sX: number,
    sY: number
  ) {
    super(canvas, ctx, x, y);
    this.r = r;
    this.sX = sX;
    this.sY = sY;
  }

  private draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(255,0,0,0.${this.r})`;
    this.ctx.fill();
  }

  update(): void {
    if (this.x < this.r || this.x > this.canvas.width - this.r) {
      this.sX = -this.sX;
    }

    if (this.y < this.r || this.y > this.canvas.height - this.r) {
      this.sY = -this.sY;
    }

    this.x += this.sX;
    this.y += this.sY;
    this.draw();
  }

  rain(rainSpeed: number): void {
    if (this.y > this.canvas.height + this.r) {
      this.y = -this.r;
      this.x = randomNum(this.canvas.width);
    }
    if (this.x < this.r || this.x > this.canvas.width - this.r) {
      this.sX = -this.sX;
    }
    this.r = rainSpeed * 2;
    // this.r = rainSpeed * 2;
    this.x += this.sX;
    this.y += rainSpeed;
    this.draw();
  }
}

export { Circle };
