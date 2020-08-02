const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var Box ;
var Box2;
var Box3
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var Box_options={
    restitution:2
}
var Box2_options={
    restitution:2
}
var Box3_options={
    restitution:2
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);

    World.add(world,ground);
Box = Bodies.rectangle(200,200,20,20,Box_options);
World.add(world,Box)
Box2 = Bodies.rectangle(150,200,20,20,Box2_options);
Box3 = Bodies.rectangle(100,200,20,20,Box3_options);
World.add(world,Box2)
World.add(world,Box3)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(Box.position.x,Box.position.y,20,20);
    rect(Box2.position.x,Box2.position.y,20,20)
    rect(Box3.position.x,Box3.position.y,20,20)
}