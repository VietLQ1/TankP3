import { GameConfig } from "../config";
import { HomeButton } from "./HomeButton";
import { PlayButton } from "./PlayButton";
import { UIContainer } from "./UIContainer";

export class GameOverContainer extends UIContainer {
    // private titleText: Phaser.GameObjects.Text;
    private scoreText: Phaser.GameObjects.Text;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        this.initGameOver();
    }
    private initGameOver(): void {
        this.displayZone.setSize(GameConfig.width as number / 2, GameConfig.height as number / 2);
        let img = this.addImage(0, 0, 'board', undefined, GameConfig.width as number / 2, GameConfig.height as number / 2).setOrigin(0.5, 0.5);
        Phaser.Display.Align.In.Center(img, this.displayZone);
        // this.titleText = this.addText(
        //     0,
        //     0,
        //     'VICOTRY',
        //     {
        //         fontSize: '60px',
        //         color: '#fff',
        //         fontStyle: 'bold',
        //     }
        // ).setOrigin(0.5, 0.5);
        // Phaser.Display.Align.In.TopCenter(this.titleText, this.displayZone, 0, -50);
        this.scoreText = this.addText(
            0,
            0,
            'Your Score: 0',
            {
                fontSize: '40px',
                color: '#fff',
                fontStyle: 'bold',
            }
        ).setOrigin(0.5, 0.5);
        Phaser.Display.Align.In.BottomCenter(this.scoreText, this.displayZone, 0, -150);
        let highScoreText = this.addText(
            0,
            0,
            'High Score: ' + localStorage.getItem('highscore'),
            {
                fontSize: '40px',
                color: '#fff',
                fontStyle: 'bold',
            }
        ).setOrigin(0.5, 0.5);
        Phaser.Display.Align.In.BottomCenter(highScoreText, this.displayZone, 0, -50);
        let replayBtn = new PlayButton(
            {
                scene: this.scene,
                x: 0,
                y: 0,
                texture: 'restartDefault',
            }, 'restartHover');
        this.addButton(replayBtn);
        Phaser.Display.Align.In.Center(replayBtn, this.displayZone, 200, 0);
        let homeBtn = new HomeButton(
            {
                scene: this.scene,
                x: 0,
                y: 0,
                texture: 'homeDefault',
            },
            'homeHover'
        );
        this.addButton(homeBtn);
        Phaser.Display.Align.In.Center(homeBtn, this.displayZone, -200, 0);
    }
    public setScore(score: number): void {
        this.scoreText.setText(`Your Score: ${score}`);
    }
    public setTitle(title: string): void {
        if (title === 'VICTORY') {
            this.imageList[0].setTint(0x508C9B);
        }
    }
}