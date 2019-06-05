// Afficheur du score

class Text {
	constructor(root, xPos, yPos) {
		let div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.left = xPos + 630;
		div.style.top = yPos;
		div.style.color = '#ffd700';
		div.style.font= 'bold 15px "Press Start 2P", serif';
		div.style.zIndex = 2000;
		root.appendChild(div);
		this.domElement = div;
	}
	update(txt) {
		this.domElement.innerText = txt;
	}
	
	color(color){
		this.domElement.style.color = color;
	}
}

class GameOver {
	constructor(root, xPos, yPos) {
		// div GAME OVER
		let div = document.createElement('div');
		div.className = "star";
		div.style.padding = "10px 30px 10px 30px";
		div.style.margin ='10px 10px 10px 10px';
		div.style.border = '2px solid #ffd700';
		div.style.borderRadius = '10px';
		div.style.position = 'absolute';
		div.style.left = xPos + 500;
		div.style.top = yPos - 200;
		div.style.textAlign = "center"
		div.style.color = '#ffd700';
		div.style.font= 'bold 60px "Press Start 2P", serif';
		div.style.zIndex = 2000;
		root.appendChild(div);
		this.domElement = div;
	}

	update(txt) {
		this.domElement.innerText = txt; ;
	}
}


class GIF {
	constructor(root, xPos, yPos) {
		// GIF de fond 
		let img = document.createElement('img');
		img.src ="images/Etoile_noireE.gif";
		img.style.left = xPos + 400;
		img.style.top = yPos - 400;
		img.style.height = GAME_HEIGHT;
		img.style.width = GAME_WIDTH;
		img.style.position = 'absolute';
		img.style.zIndex = 1900;
		root.appendChild(img);
		this.domElement = img;
	}
	update(txt) {
		this.domElement.src = "images/space.jpg" ;
	}
}

class bg{
	constructor(root, xPos, yPos) {
		// GIF de fond 
		let img = document.createElement('img');
		img.src ="images/black.gif";
		img.style.left = xPos + 400;
		img.style.top = yPos - 400;
		img.style.height = GAME_HEIGHT;
		img.style.width = GAME_WIDTH;
		img.style.position = 'absolute';
		img.style.zIndex = 1;
		root.appendChild(img);
		this.domElement = img;
	}
	update(image) {
		this.domElement.src = image;
	}
}





class TryAgain {
	constructor(root, xPos, yPos) {
		//Bouton tryAgain
		let bouton = document.createElement('button');
		bouton.className = "bouton";
		bouton.innerText = "TRY AGAIN!";
		// bouton.style.border = '2px solid #ffd700';
		bouton.style.left = xPos + 550;
		bouton.style.top = yPos + 100;
		bouton.style.padding = "10px 10px 10px 10px"
		bouton.style.font= 'bold 20px "Press Start 2P", serif';
		bouton.style.backgroundColor = 'transparent'
		bouton.style.border = 'none';
		bouton.style.position = 'absolute';
		bouton.style.color = '#ffd700';
		bouton.style.zIndex = 2000;
		bouton.onclick = () => { 
			location.reload()
		}
		root.appendChild(bouton);
		this.domElement = bouton;

	}
	update(txt) {
		this.domElement.innerText = txt;
	}

}

class Life {
	constructor(root, xPos, yPos) {
		let div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.left = xPos + 510;
		div.style.top = yPos;
		div.style.color = '#ffd700';
		div.style.font= 'bold 15px "Press Start 2P", serif';
		div.style.zIndex = 2000;
		root.appendChild(div);
		this.domElement = div;
	}
	update(txt) {
		this.domElement.innerText = txt;
	}
}