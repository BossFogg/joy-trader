import Phaser from 'phaser';

export class JoyTrader {

	game: Phaser.Game;
	
	config = {
		width: 800,
		height: 600,
		type: Phaser.AUTO,
		parent: "content",
		scene: {
			preload: this.gamePreload,
			create: this.gameCreate,
			update: this.gameUpdate
		}
	}

	constructor() {
		this.game = new Phaser.Game(this.config);
	}

	gamePreload() {
		console.log("I'm preloading!!!");
	}

	gameCreate() {
		console.log("I'm creating!!!");
	}

	gameUpdate() {
		console.log("I'm updating!!!");
	}
}