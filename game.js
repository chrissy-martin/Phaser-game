function create() {
    this.add.text(50, 50, 'Critters of Chaos');
}

const config = {
    width: 500,
    height: 600 ,
    backgroundColor: 0x124D3E,
    scene: {create}
  }
  
  const game = new Phaser.Game(config);