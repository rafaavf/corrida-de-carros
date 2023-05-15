var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1,car2,carImg1,carImg2;
var track;
var cars = [];
var fuels, powercoins, obstacles;
var fuelImg, powercoinImg, obstacleImg1, obstacleImg2;
var lifeImg;
var blastImg;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  carImg1 = loadImage ("./assets/car1.png");
  carImg2 = loadImage ("./assets/car2.png");
  track = loadImage ("./assets/track.jpg");
  fuelImg = loadImage ("./assets/fuel.png");
  powercoinImg = loadImage ("./assets/goldCoin.png");
  obstacleImg1 = loadImage ("./assets/obstacle1.png");
  obstacleImg2 = loadImage ("./assets/obstacle2.png");
  lifeImg = loadImage ("./assets/life.png");
  blastImg = loadImage ("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2){
    game.showLeaderboard();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
