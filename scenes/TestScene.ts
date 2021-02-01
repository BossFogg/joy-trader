import Phaser from 'phaser';
import { JoyToken } from '../token/JoyToken';
import { Button } from '../objects/Button';

export class TestScene extends Phaser.Scene {

	button?: Button;

	token = new JoyToken();
	
	preload() {
		console.log("loading");
	}

	create() {
		this.button = new Button(this, 400, 300, "Pay Out");
	}

	update() {
		if (this.button && this.button.isReleased) {
			this.button.isReleased = false;
			let address = prompt("Please enter your ETH address:", "");
			if (!address) alert("Pay Out Cancelled");
			else this.token.mintToAddress(address, 100);
		}
	}

}