// fonction pour placer  les enemies

let nextEnemySpot = (enemies) => {
	let enemySpots = GAME_WIDTH / ENEMY_WIDTH;
	let spotsTaken = [ false, false, false, false, false ];
	enemies.forEach((enemy) => {
		spotsTaken[enemy.spot] = true;
	});
	let candidate = undefined;
	while (candidate === undefined || spotsTaken[candidate]) {
		candidate = Math.floor(Math.random() * enemySpots);
	}
	return candidate;
};

// fonction qui ajoute le background avec des etoiles

let addBackground = (root) => {
	document.body.style.background = "url('images/space.jpg')";
	let bg = document.createElement('img');
	bg.src = 'images/starwastheme.gif';
	bg.style.height = GAME_HEIGHT + 'px';
	bg.style.width = GAME_WIDTH + 'px';
	bg.style.position = 'absolute';
	bg.style.left = 600 + 'px';
	root.append(bg);

	let whiteBox = document.createElement('div');
	whiteBox.style.zIndex = 100;
	whiteBox.style.position = 'absolute';
	whiteBox.style.top = GAME_HEIGHT + 'px';
	whiteBox.style.left = 600 + 'px';
	whiteBox.style.height = ENEMY_HEIGHT + 'px';
	whiteBox.style.width = GAME_WIDTH + 'px';
	whiteBox.style.background = "url('images/space.jpg')";
	root.append(whiteBox);
};

