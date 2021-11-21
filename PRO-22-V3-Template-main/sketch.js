const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  //CREATE THE OBJECT FOR PLAYER & PLAYERBASE
  playerBase = Bodies.rectangle(200, 350, 180, 150, {isStatic: true})
  World.add(world, playerBase)

  
  player = Bodies.rectangle(200, playerBase.position.y - 160, 50, 180, {isStatic: true})
  World.add(world, player)


}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  
  //DISPLAY THE OBJECTS
  image(baseImage, playerBase.position.x, playerBase.position.y, 180, 150)
  image(playerImage, player.position.x, player.position.y, 50, 180)
  


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




