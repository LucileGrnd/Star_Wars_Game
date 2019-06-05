class music {
  constructor(root) {
    let x = document.createElement("audio");
    x.src = "music/star-wars-main.mp3";
    x.className = "audioSet";
    root.appendChild(x);
    this.domElement = x;
  }
  PlayAudio() {
    this.domElement.play();
  }

  PauseAudio() {
    this.domElement.pause();
    this.domElement.currentTime = 0;
  }
}

class musicGameover {
  constructor(root) {
    let x = document.createElement("audio");
    x.src = "music/game-over.mp3";
    x.className = "audioSet";
    root.appendChild(x);
    this.domElement = x;
  }
  PlayAudio() {
    this.domElement.play();
  }

  PauseAudio() {
    this.domElement.pause();
    this.domElement.currentTime = 0;
  }
}

class musicWin {
  constructor(root) {
    let x = document.createElement("audio");
    x.src = "music/star-wars-victory.mp3";
    x.className = "audioSet";
    root.appendChild(x);
    this.domElement = x;
  }
  PlayAudio() {
    this.domElement.play();
  }

  PauseAudio() {
    this.domElement.pause();
    this.domElement.currentTime = 0;
  }
}
