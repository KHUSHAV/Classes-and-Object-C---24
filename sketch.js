const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2 , box3 , box4 , box5 ;
var pig1 , pig2 ;
var log1 , log2 , log3 , log4  ;
var bird1 ;
var ground;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70)
    ground = new Ground(width/2,height,width,20)
    pig1  = new Pig(810,350);
    pig2  = new Pig(810,220);
    log1 = new Log(810,260,300,PI);
    log2 = new Log(810,180,300,PI);
    log3 = new Log(750,120,130,PI/-3);
    log4 = new Log(870,120,130,PI/3);
    bird1 = new Bird(200,200);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}