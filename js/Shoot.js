class Shoot {
	// Les chats bougent=>
	update(timeDiff) {
		this.y =  this.y - timeDiff
		this.x = this.x;
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.left = this.x + 'px';
		if (this.y < 0) {
			this.root.removeChild(this.domElement);
			this.destroyed = true;
		}
		//We update the y property of the instance in proportion of the
		//amount of time since the last call to update. We also update the top css
		// property so that the image is updated on screen
	}
	// constructeur objet
	constructor(theRoot, positionX, positionY) {
		this.root = theRoot;
		this.x = positionX + PLAYER_WIDTH/2;
		this.y = positionY + PLAYER_HEIGHT/2;
		this.speed = Math.random() / 1 + 0.25;
		this.domElement = document.createElement('img');
		this.domElement.src = 'images/bullet.png';
		this.domElement.style.position = 'absolute';
		this.domElement.style.left = this.x + 'px';
		this.domElement.style.top = this.y + 'px';
		this.domElement.style.zIndex = '10';
		theRoot.appendChild(this.domElement);
	}
}
