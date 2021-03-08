const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var plinkos=[];
var divisions=[];
var particles=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255);  

for(var k = 0;k<=width;k=k+80){
divisions.push(new Divisions(k,k-divisionHeight/2,10,divisionHeight));
}

for(var j = 40;j<=width;j=j+50){
plinkos.push(new Plinkos(j,75,10));
}
for(var j=15;j <=width-10;j=j+50){
  plinkos.push(new Plinkos(j,175,10));

}
plinkos.display();
divisions.display();
  drawSprites();
}