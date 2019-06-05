// Objet createur qui fait le jeu

class Engine {
	// fonction qui va faire tourner le jeu
	gameLoop = () => {

		this.music.PlayAudio()
		// on cree un temps sil est indefini
		if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();

		// on met le temps qui s ecoule
		let timeDiff = new Date().getTime() - this.lastFrame;
		this.lastFrame = new Date().getTime();

		// on loupe a travers l array enemis
		this.enemies.forEach((enemy) => {
			enemy.update(timeDiff);
		});

		// Meme chose pour star

		this.star.forEach((star) => {
			star.update(timeDiff);
		});

		//on loupe pour rajouter des shoots
		this.player.shots.forEach((shoot) => {
			shoot.update(timeDiff);
		});


		//score a afficher
		let txt = 'Score: ' + SCORE;
		this.text.update(txt);
		if(SCORE >= 4000){
		this.text.color('red');
		}
		// //life a afficher
		// let lifePlayer = 'L: '+ LIFE;
		// this.life.update(lifePlayer);

		// Detruit les shots dans le tableau pour en creer de nouveau
		this.player.shots = this.player.shots.filter(bullet =>{
			return !bullet.destroyed;
		})

		// meme chose pour star
		this.star = this.star.filter(star =>{
			return !star.destroyed;
		})

		// on nettoie notre tableau, si y a des enemies morts
		this.enemies = this.enemies.filter((enemy) => {
			return !enemy.destroyed;
		});

		// on regarde quil y a tjrs le bon nbre d enemies
		while (this.enemies.length < MAX_ENEMIES) {
			let spot = nextEnemySpot(this.enemies);
			this.enemies.push(new Enemy(this.root, spot));
		}

		if(SCORE === 4000){
			while (this.star.length < MAX_STAR) {
				this.star.push(new Etoile(this.root));
			};
			let o = new bg(this.root,200,400);
			SCORE +=1
		}		

		// on verifie si le joeur est mort
		if (this.isPlayerDead()) {
			this.music.PauseAudio();
			let a = new GameOver (this.root,200,400);
			let b = new TryAgain (this.root,200,400);
			let c = new GIF (this.root,200,400);
			let d = new musicGameover(this.root)
			d.PlayAudio()
			setTimeout(()=>{d.PauseAudio()},20000)
			let txt = 'GAME' + '\n' +'OVER'
			a.update(txt);
	
			setInterval(blinktext, 400); 
			var count = 0;
			function blinktext() {
				let txt = ''; 
				if (count == 0){
					txt = 'TRY AGAIN!';
					b.update(txt);
				}
				if (count % 2 == 0){
					txt = "";
					b.update(txt);
				}
				else{
					txt = 'TRY AGAIN!';
					b.update(txt);
				}
				count++;
			}
			return;
		}



		//Affichage you win!!

		if (STARDOWN) {
			//PLAY MUSIC
			this.music.PauseAudio();
			//GAME WIN
			setTimeout(()=>{
				let d = new GameWin (this.root,200,400);
				let txt = 'CONGRATS!' + '\n' + 'YOU' + '\n' +'WIN!'
				d.update(txt);
			},3000)
			//PLAY AGAIN

	
			let e = new PlayAgain (this.root,200,400);
			
			//
			let f = new GIFWIN (this.root,200,400);
			let g = new Blackbox(this.root,200,400);
			let h = new musicWin (this.root);

			setInterval(blinktext, 400);

			h.PlayAudio();

			var count = 0;
			function blinktext() {
				let txt = ''; 
				if (count == 0){
					txt = 'PLAY AGAIN!';
					e.update(txt);

				}
				if (count % 2 == 0){
					txt = "";
					e.update(txt);
				}
				else{
					txt = 'PLAY AGAIN!';
					e.update(txt);
				}
			count++
			}
			return;
		}
		// verifie que enemy mort
		this.isEnemyDead();

		//verifie etoile morte
		this.isStarDead();

		// update le jeu toute les 20ms
		setTimeout(this.gameLoop, 20); 

	};

	// Playeur mort
	isPlayerDead = () => {
		let dead = false;
		this.enemies.forEach(enemy => {
		  if (
			enemy.x < this.player.x + PLAYER_WIDTH &&
			enemy.x + ENEMY_WIDTH > this.player.x &&
			enemy.y < this.player.y + PLAYER_HEIGHT &&
			enemy.y + ENEMY_HEIGHT > this.player.y
		  ){
			dead = true;
		  }	
		});
		return dead;
	};
	
	// enemi frappe par lazer:

	shotHitEnemy = (shot, enemy) => {
		let topOfShot =  shot.y;
		let bottomOfEnemy = enemy.y + ENEMY_HEIGHT;
		let shotSpot = (shot.x - PLAYER_WIDTH/2 - 600)/ PLAYER_WIDTH
		if(topOfShot <= bottomOfEnemy && shotSpot === enemy.spot) return true;
		return false;
	}

	// Est-ce que l enemi est mort? 

	isEnemyDead = () => {
		this.enemies.forEach((enemy, enemyInd, arrEnemy)=>{
			this.player.shots.forEach((shot, shotInd, arrShot)=>{
				if(this.shotHitEnemy(shot,enemy)){
					//change enemy to explosion image
					enemy.domElement.src = 'images/explosion.png';
					//delete the shot from spaceship
					arrShot.splice(shotInd,1);
					this.root.removeChild(shot.domElement);
					// delay the delete of the enemy explosion
					arrEnemy.splice(enemyInd,1);
					//setTimeout
					setTimeout(()=>{this.root.removeChild(enemy.domElement);
					}, 500);
					SCORE +=100;
				}
			});
		});
	};

	// enemi frappe par lazer:

	shotHitStar = (shot, star) => {
		let topOfShot =  shot.y;
		let bottomOfEnemy = star.y + DEATH_HEIGHT;
		let shotSpot = Math.floor(shot.x);
			if(topOfShot <= bottomOfEnemy && shotSpot === 862) {
				return true;
			}
			return false;
		}

	isStarDead = () => {
		this.star.forEach((star, starInd, arrstar)=>{
			this.player.shots.forEach((shot, shotInd, arrShot)=>{
				if(this.shotHitStar(shot,star)){
					STARTOUCH -=1;
					arrShot.splice(shotInd,1);
					this.root.removeChild(shot.domElement);
					//change enemy to explosion image
					console.log(STARTOUCH)
					if(STARTOUCH<0){
					star.domElement.src = 'images/explo.gif';
					// delay the delete of the enemy explosion
					arrstar.splice(starInd,1);
					//setTimeout
					setTimeout(()=>{this.root.removeChild(star.domElement);
					}, 500);
					SCORE +=10000;
					STARTOUCH = 15;
					setTimeout(()=>{STARDOWN = true;},1000);
					return;
					}
					return;
				}
			});
		});
	};
	 
	// le constructeur
	constructor(theRoot) {
		this.root = theRoot;
		this.text = new Text(this.root, 300, 20);
		// this.life = new Life(this.root,100,20);
		this.music = new music(this.root);
		this.player = new Player(this.root);
		this.star =[];
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
