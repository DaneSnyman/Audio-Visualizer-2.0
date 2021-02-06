const randomNum = (max: number, min?: number): number => {
  return Math.floor(
    min ? Math.random() * (max - min) + min : Math.random() * max
  );
};

const randomPosNeg = (num: number): number => {
  return Math.random() > 0.5 ? num : -num;
};

const setCanvasHeight = (canvas: HTMLCanvasElement) => {
  if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
};

const average = (nums: Uint8Array): number => {
  return nums.reduce((a, b) => a + b) / nums.length;
};

export { randomNum, randomPosNeg, setCanvasHeight, average };
