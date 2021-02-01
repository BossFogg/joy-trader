import Phaser from 'phaser';

export class Button extends Phaser.GameObjects.Text {

	isReleased = false;
	
	constructor(scene: Phaser.Scene, x: number, y: number, text: string) {
		super(scene, x, y, text, { backgroundColor: "#2287c9"});

		this.setPadding({x: 10, y: 10});
		this.setOrigin(0.5, 0.5);

		this.setInteractive({useHandCursor: true})
			.on('pointerover', () => { this.hoverState(true) })
			.on('pointerout', () => { this.hoverState(false) })
			.on('pointerdown', () => { this.clickState() })
			.on('pointerup', () => { this.activate() })

		scene.add.existing(this);

	}

	hoverState(on: boolean) {
		if (on) this.setStyle({fill: '#ff0'});
		else {
			this.setStyle({fill: '#fff'});
			this.isReleased = false;
		}
	}

	clickState() {
		this.setStyle({fill: '#0ff'});
	}

	activate() {
		this.hoverState(true);
		this.isReleased = true;
	}

}