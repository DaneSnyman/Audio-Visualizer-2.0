import { AudioC } from "./audio";
import "./style.scss";

const tracks = ["http://chi.bassdrive.co/;stream/1"];
const audioPlayer = new AudioC(tracks);
audioPlayer.play();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const animate = () => {
  if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  requestAnimationFrame(animate);
};

animate();
