// Creation des enemies et de ses actions dans un objet

class Enemy {
	// Les chats bougent=>
	update(timeDiff) {
		// if (COUNT > 1) {
		// 	this.speed *= 1.01;
		// }
		this.y = this.y + timeDiff * this.speed;
		// this.x = 1 + timeDiff * this.speed;
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.left = this.x + 'px';
		if (this.y > GAME_HEIGHT) {
			this.root.removeChild(this.domElement);
			this.destroyed = true;
		}
		// if (this.x > GAME_WIDTH) {
		// 	this.root.removeChild(this.domElement);
		// 	this.destroyed = true;
		// }
		COUNT++;
		//We update the y property of the instance in proportion of the
		//amount of time since the last call to update. We also update the top css
		// property so that the image is updated on screen
	}

	// Types of enemies

	ConfigTypes = {
		tieFigther: {
			speed: Math.random() / 3 + 0.25,
			image: 'images/tieFigther.png'
		},
		Asteroid: {
			speed: Math.random() / 2 + 0.25,
			image: 'images/5Q0w.gif'
		}
	};

	// constructeur objet
	constructor(theRoot, enemySpot) {
		this.root = theRoot;
		this.spot = enemySpot;
		this.typeEnemy = () => {
			let a = Math.floor(Math.random() * 1001);
			if (a % 2 === 0) {
				return 'tieFigther';
			}
			return 'Asteroid';
		};
		this.enemytype = this.typeEnemy();
		this.x = enemySpot * ENEMY_WIDTH + 600;
		this.y = -ENEMY_HEIGHT;
		this.speed = this.ConfigTypes[this.enemytype].speed;
		this.domElement = document.createElement('img');
		this.domElement.src = this.ConfigTypes[this.enemytype].image;
		this.domElement.style.position = 'absolute';
		this.domElement.style.left = this.x + 'px';
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.zIndex = '5';
		theRoot.appendChild(this.domElement);
	}
}

class Etoile {
	update(timeDiff) {
		this.y = this.y + timeDiff * this.speed;
		this.x = this.x;
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.left = this.x + 'px';
		if (this.y > GAME_HEIGHT) {
			this.root.removeChild(this.domElement);
			this.destroyed = true;
		}
	}

	// constructeur objet
	constructor(theRoot) {
		this.root = theRoot;
		this.x =  GAME_WIDTH/2 + 550;
		this.y = -DEATH_HEIGHT;
		this.speed = 0.01;
		this.domElement = document.createElement('img');
		this.domElement.src = 'images/DS.png'
		this.domElement.style.position = 'absolute';
		this.domElement.style.left = this.x + 'px';
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.zIndex = '8';
		theRoot.appendChild(this.domElement);
	}

}