// preload() lets us load all of our assets for the game.
function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

//add create() function. create() sets up all of the game objects to set stage.
function create() {
    codey = this.add.sprite(30, 200, 'codey');
}

//update() lets us add motion, animateion, and interaction into the game.
function update() {
    codey.x += 1;
}

//config object specifies some meta-information about the game
const config = {
    width: 500,
    height: 600 ,
    backgroundColor: 0x124D3E,
// add in scene information
    scene: {
        preload,
        create, 
        update
    }
  }
  
  const game = new Phaser.Game(config);