// Setup the new Howl.
import { Howler, Howl } from "howler";

class AudioC {
  tracks: string[] | string;
  stream: Howl;

  constructor(tracks: string[] | string) {
    this.tracks = tracks;
    this.stream = this.createHowl();
  }

  private createHowl(): Howl {
    return new Howl({
      src: this.tracks,
      autoplay: true,
      html5: true,
    });
  }

  play(): void {
    this.stream.play();
  }
}

export { AudioC };
