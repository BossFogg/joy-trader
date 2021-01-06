import Phaser from 'phaser';

let config = {
	type: Phaser.AUTO,
	scene: {
		preload: gamePreload,
		create: gameCreate,
		update: gameUpdate
	}
}

function gamePreload() {

}

function gameCreate() {

}

function gameUpdate() {

}

let game = new Phaser.Game(config);