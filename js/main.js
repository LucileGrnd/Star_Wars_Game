// Code pour  eventlistener et faire fonctionner le burger

let gameEngine = new Engine(document.getElementById("app"));

//evenement
let keydownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }
  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
  if (event.code === "Space") {
    gameEngine.player.shoot();
    var audio = document.createElement("audio");
    audio.src = "music/LaserBlasts.mp3";
    audio.play();
  }
};

// evenement pour bouger perso
document.addEventListener("keydown", keydownHandler);

// on lance le jeu

gameEngine.gameLoop();

// on modifie le nombre d enemies
setInterval(() => {
  if (MAX_ENEMIES < 5) MAX_ENEMIES++;
}, 10000);
