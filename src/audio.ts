// Setup the new Howl.
import { Howler, Howl } from "howler";

class AudioC {
  tracks: string[] | string;
  stream: Howl;
  analyser: AnalyserNode;
  bufferLength: number;
  dataArr: Uint8Array;

  constructor(tracks: string[] | string) {
    this.tracks = tracks;
    this.stream = this.createHowl();
  }

  private createHowl(): Howl {
    return new Howl({
      src: this.tracks,
      autoplay: true,
      format: ["mp3", "aac"],
    });
  }

  private connectAnalyser(): void {
    this.analyser = Howler.ctx.createAnalyser();
    Howler.masterGain.connect(this.analyser);
    this.analyser.connect(Howler.ctx.destination);
    this.analyser.fftSize = 32;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArr = new Uint8Array(this.bufferLength);
    this.analyser.getByteTimeDomainData(this.dataArr);
  }

  play(): void {
    this.stream.play();
    this.connectAnalyser();
  }

  getAudioData(): Uint8Array {
    this.analyser.getByteTimeDomainData(this.dataArr);
    return this.dataArr;
  }
}

export { AudioC };
