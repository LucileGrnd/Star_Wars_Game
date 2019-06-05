// Creation du joeur et de ses actions dans un objet

class Player {
	constructor(root) {
		this.shots =[];
		this.root = root;
		this.x = 2 * PLAYER_WIDTH + 600;
		this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
		this.domElement = document.createElement('img');
		this.domElement.src = 'images/f.png';
		this.domElement.style.position = 'absolute';
		this.domElement.style.left = this.x + 'px';
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.zIndex = '11';
		root.appendChild(this.domElement);
	}

	shoot(){
		let a  = new Shoot(this.root, this.x, this.y);
		this.shots.push(a);	
	}

	// pour se deplacer a gauche
	moveLeft() {
		if (this.x > 600) {
			this.x = this.x - PLAYER_WIDTH;
		}
		this.domElement.style.left = this.x + 'px';
	}

	// pour se deplacer a droite
	moveRight() {
		if (this.x + PLAYER_WIDTH < GAME_WIDTH + 600) {
			this.x = this.x + PLAYER_WIDTH;
		}
		this.domElement.style.left = this.x + 'px';
	}

	moveUp() {
		if (this.y > 0) {
			this.y = this.y - PLAYER_HEIGHT;
		}
		this.domElement.style.top = this.y + 'px';
	}

	moveDown() {
		if (this.y + PLAYER_HEIGHT < GAME_HEIGHT - PLAYER_HEIGHT) {
			this.y = this.y + PLAYER_HEIGHT;
		}
		this.domElement.style.top = this.y + 'px';
	}
}
