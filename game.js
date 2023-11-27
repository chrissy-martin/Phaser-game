//add create() function. create() sets up all of the game objects to set stage.
function create() {
    this.add.text(50, 50, 'Critters of Chaos');
}
//config object specifies some meta-information about the game
const config = {
    width: 500,
    height: 600 ,
    backgroundColor: 0x124D3E,
// add in scene information
    scene: {create}
  }
  
  const game = new Phaser.Game(config);