// Objet createur qui fait le jeu

class Engine {
  // fonction qui va faire tourner le jeu
  gameLoop = () => {
    // on cree un temps sil est indefini
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();

    // on met le temps qui s ecoule
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();

    // on loupe a travers l array enemis
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });

    // console.log(this.player.shots);

    //on loupe pour rajouter des shoots
    this.player.shots.forEach(shoot => {
      // this.player.position.x = this.player.x;
      // this.player.position.y = this.player.y;
      shoot.update(timeDiff);
    });

    //score a affiche
    let txt = 'Score: ' + SCORE;
    this.text.update(txt);

    //
    this.player.shots = this.player.shots.filter(bullet => {
      return !bullet.destroyed;
    });

    // on nettoie notre tableau, si y a des enemies morts
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });

    // on regarde quil y a tjrs le bon nbre d enemies
    while (this.enemies.length < MAX_ENEMIES) {
      let spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    // on verifie si le joeur est mort
    if (this.isPlayerDead()) {
      window.alert('Game over');
      return;
    }

    // console.log(this.isEnemyDead());
    this.isEnemyDead();

    setTimeout(this.gameLoop, 20); // update le jeu toute les 20ms
  };

  // Playeur mort
  isPlayerDead = () => {
    for (let i = 0; i < this.enemies.length; i++) {
      let enemyY = this.enemies[i].y + ENEMY_HEIGHT;
      let enemyX = this.enemies[i].x;

      if (
        enemyY > this.player.y &&
        this.enemies[i].y < this.player.y + PLAYER_HEIGHT &&
        enemyX + ENEMY_WIDTH > this.player.x &&
        enemyX < this.player.x + PLAYER_WIDTH
      ) {
        return true;
      }
    }
    SCORE += 10;
    return false;
  };

  shotHitEnemy = (shot, enemy) => {
    let topOfShot = shot.y;
    let bottomOfEnemy = enemy.y + ENEMY_HEIGHT;
    let shotSpot = (shot.x - PLAYER_WIDTH / 2 - 500) / PLAYER_WIDTH;
    console.log('shotspot:', shotSpot, 'enemyspot:', enemy.spot);
    if (topOfShot <= bottomOfEnemy && shotSpot === enemy.spot) return true;
    return false;
  };
  // enemi mort
  isEnemyDead = () => {
    if (this.player.shots) console.log('shots', this.player.shots);
    this.enemies.forEach((enemy, enemyIdx, enemies) => {
      this.player.shots.forEach((shot, shotIdx, shots) => {
        if (this.shotHitEnemy(shot, enemy)) {
          // console.log('Enemy hit!!', enemy);
          // change enemy image to explosion
          enemy.domElement.src = 'images/explosion.png';
          // delete shot from shots
          shots.splice(shotIdx, 1);
          this.root.removeChild(shot.domElement);
          // delay delete enemy from enemies
          enemies.splice(enemyIdx, 1);
          // this.root.removeChild(enemy.domElement);
          setTimeout(() => {
            this.root.removeChild(enemy.domElement);
          }, 1000);
        }
      });
    });
    // for (let i = 0; i < this.enemies.length; i++) {
    //   let enemyY = this.enemies[i].y + ENEMY_HEIGHT;
    //   let enemyX = this.enemies[i].x;

    //   for (let j = 0; j < this.player.shots.length; j++) {
    //     if (
    //       enemyY > this.player.shots[j].y &&
    //       this.enemies[i].y < this.player.shots[j].y + PROJECTILE_HEIGHT &&
    //       enemyX + ENEMY_WIDTH > this.player.shots[j].x &&
    //       enemyX < this.player.shots[j].x + PROJECTILE_WIDTH
    //     ) {
    //       console.log(this.enemies[i]);
    //       this.enemies[i].domElement.src = 'images/explosion.png';
    //       this.root.removeChild(this.player.shots[j].domElement);
    //       this.root.removeChild(this.enemies[i].domElement);
    //       delete this.enemies[i];
    //       delete this.player.shots[j];
    //       return true;
    //     }
    //   }
    // }
  };

  // le constructeur
  constructor(theRoot) {
    this.root = theRoot;
    this.text = new Text(this.root, 300, 20);
    this.player = new Player(this.root);
    this.enemies = [];
    addBackground(this.root);
  }
}

//Pythagore pour cercle:
// let xd = this.enemies[i].x - this.player.x;
// let yd = this.enemies[i].y - this.player.y;

// let pyth = Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2));

// if (pyth < ||) {
// 	return true;
