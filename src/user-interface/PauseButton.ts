import { IImageConstructor } from "../interfaces/image.interface";
import { GameScene } from "../scenes/game-scene";
import { Button } from "./Button";

export class PauseButton extends Button {
    constructor(aParams: IImageConstructor, overTexture: string) {
        super(aParams);
        this.overTexture = overTexture;
    }
    onDown() {
        if (this.scene instanceof GameScene)
        {
            this.scene.pauseGame();
        }
    }
}