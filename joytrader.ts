import Phaser from 'phaser';
import { TestScene } from './scenes/TestScene';

export class JoyTrader {

	game: Phaser.Game;
	
	config = {
		width: 800,
		height: 600,
		type: Phaser.AUTO,
		parent: "content",
		scene: [TestScene]
	}

	constructor() {
		this.game = new Phaser.Game(this.config);
	}
}