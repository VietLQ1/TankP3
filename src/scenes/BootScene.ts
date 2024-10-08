export class BootScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;

  constructor() {
    super({
      key: 'BootScene'
    });
  }

  preload(): void {
    // set the background, create the loading and progress bar
    this.cameras.main.setBackgroundColor(0x000000);
    this.createLoadingGraphics();
    this.input.setDefaultCursor('url(assets/images/normal.cur), pointer');

    // pass value to change the loading bar fill
    this.load.on(
      'progress',
      function (this: BootScene, value: number) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0x88e453, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        );
      },
      this
    );

    // delete bar graphics, when loading complete
    this.load.on(
      'complete',
      function (this: BootScene) {
        this.progressBar.destroy();
        this.loadingBar.destroy();
      },
      this
    );

    // load our package
    this.load.pack('preload', './assets/pack.json', 'preload');
    this.load.audio('gameBGM', 'assets/audio/GameBGM.mp3');
    this.load.audio('menuBGM', 'assets/audio/MenuBGM.mp3');
    this.load.audio('shootSound', 'assets/audio/shotFX.mp3');
    this.load.audio('explosionSound', 'assets/audio/explodeFX.mp3');
    this.load.audio('button', 'assets/audio/button.mp3');
    this.load.audio('victory', 'assets/audio/victory.mp3');
    this.load.audio('defeat', 'assets/audio/defeat.mp3');
  }

  update(): void {
    this.scene.start('MenuScene');
  }

  private createLoadingGraphics(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0xffffff, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}
