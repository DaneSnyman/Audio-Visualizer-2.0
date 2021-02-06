import { AudioC } from "./audio";
import "./style.scss";
import { Swarm } from "./swarm";
import { average, setCanvasHeight } from "./utilities";

// Audio Vars
const tracks = [
  "https://r2---sn-54gpivnu15-j2ue.googlevideo.com/videoplayback?expire=1612631168&ei=IHgeYOyUB431WOjjvZgN&ip=169.0.53.14&id=o-AOc8RRR6BHszFflgfC6IR3IuCqg9cf7rctIqCvFiYTEC&itag=18&source=youtube&requiressl=yes&mh=-X&mm=31%2C29&mn=sn-54gpivnu15-j2ue%2Csn-woc7lne7&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=745000&vprv=1&mime=video%2Fmp4&ns=miFfIbWjCY6mmY1ZNPbc3GcF&gir=yes&clen=190560201&ratebypass=yes&dur=2640.015&lmt=1583624411379431&mt=1612609243&fvip=5&c=WEB&txp=5431432&n=1ApqaLRcMphWGoj&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOcTL6Xmnu_unkoUqo4VS2L8Uz0rhNBsxxCPxA0C_4lSAiEA7bupEiH7SuZnBNr9xm1GmCN3CNoMFeGkKnY-Qp_tdZE%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgTnvW4bntRWx8ODYonlC7NY9e43f8Mk8lIQFT60ejaI0CIAXZadVRDXIDsTEXGElIIMeYdmNGzCGxwbHvYFXQWGw1",
];
const audioPlayer = new AudioC(tracks);

// Canvas Vars
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let swarm: Swarm;

const animate = () => {
  setCanvasHeight(canvas);
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(30,30,30,0.6)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  swarm.update(average(audioPlayer.getAudioData()));
};

const init = () => {
  setCanvasHeight(canvas);
  audioPlayer.play();
  swarm = new Swarm(canvas, ctx, 2000);
  animate();
};

init();
