class GameWin {
	constructor(root, xPos, yPos) {
		// div GAME WIN
		let div = document.createElement('div');
		div.className = "win";
		div.style.padding = "10px 20px 10px 20px";
		div.style.margin ='10px 10px 10px 10px';
		div.style.border = '2px solid #ffd700';
		div.style.borderRadius = '10px';
		div.style.position = 'absolute';
		div.style.left = xPos + 450;
		div.style.top = yPos - 150;
		div.style.textAlign = "center"
		div.style.color = '#ffd700';
		div.style.font= 'bold 40px "Press Start 2P", serif';
		div.style.zIndex = 2000;
		root.appendChild(div);
		this.domElement = div;
	}

	update(txt) {
		this.domElement.innerText = txt; ;
	}
}


class GIFWIN {
	constructor(root, xPos, yPos) {
		// GIF de fond 
		let img = document.createElement('img');
		img.src ="images/adios.gif";
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

class PlayAgain {
	constructor(root, xPos, yPos) {
		//Bouton PlayAgain
		let boutonW = document.createElement('button');
		boutonW.className = "boutonTwo";
		boutonW.innerText = "";
		// bouton.style.border = '2px solid #ffd700';
		boutonW.style.left = xPos + 550;
		boutonW.style.top = yPos + 150;
		boutonW.style.padding = "10px 10px 10px 10px"
		boutonW.style.font= 'bold 20px "Press Start 2P", serif';
		boutonW.style.backgroundColor = 'transparent'
		boutonW.style.border = 'none';
		boutonW.style.position = 'absolute';
		boutonW.style.color = '#ffd700';
		boutonW.style.zIndex = 2100;
		boutonW.onclick = () => { 
			location.reload()
		}
		root.appendChild(boutonW);
		this.domElement = boutonW;
	}
	update(txt) {
		this.domElement.innerText = txt;
	}

}

class Blackbox {
	constructor(root, xPos, yPos) {
		let div = document.createElement('div');
        div.className = "win";
        
        div.style.padding = "10px 20px 10px 20px";
        div.style.width = '110px'
        div.style.height = '30px'
		div.style.margin ='10px 10px 10px 10px';
        div.style.position = 'absolute';
        div.style.backgroundColor = 'black'
		div.style.left = xPos + 750;
		div.style.top = yPos + 230;
		div.style.zIndex = 3000;
		root.appendChild(div);
        this.domElement = div;
    }
	update(txt) {
		this.domElement.innerText = txt;
	}

}