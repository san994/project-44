const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const SAT = Matter.SAT

var engine,world;

var LEVEL1 = 0,LEVEL2 = 1,LEVEL3 = 2

var gameState = LEVEL1

var p = []

var particles = []

function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create()
   world = engine.world

   ground = new Ground(50,550,150,10);

    player1 = new Player(50,500,30,30);
    player2 = new Player(10,500,30,30);
 
     platform1 = new Platform(200,550,100,20);
 
     platform2 = new Platform(400,550,100,20);
     platform3 = new Platform(600,550,100,20);
 
     platform4 = new Platform(750,400,100,20)
     platform5 = new Platform(500,370,100,20)
 
     platform6 = new Platform(70,450,150,20)
     platform7 = new Platform(250,400,100,20)
 
    platform8 = new Platform(6000,400,100,20)
     platform9 = new Platform(350,300,100,20)
 
     platform10 = new Platform(650,300,100,20)
     platform11 = new Platform(700,480,100,20)

     platform12 = new Platform(200,250,100,20)
     platform13 = new Platform(800,250,100,20)

     platform14 = new Platform(350,150,100,20)
     platform15 = new Platform(650,150,100,20)
 
     mainPlatform = new Platform(500,100,150,20)
 
    keyPressed()

}

function draw() {
  background("lightBlue");
 
  Engine.update(engine);

  mainPlatform.display()
  mainPlatform.colour = "brown"

  ground.display()
  player1.display()
  player1.colour = "blue"
  player2.display()
  player2.colour = "pink"

   platform1.display()
   platform2.display()
   platform3.display()
   platform4.display()
   platform5.display()
   platform6.display()
   platform7.display()
   platform8.display()
   platform9.display()
   platform10.display()
   platform11.display()
   platform12.display()
   platform13.display()
   platform14.display()
   platform15.display()


 platformCollider()

}

function keyPressed(){

 
     if(keyCode === 68){

       Matter.Body.applyForce(player1.body,player1.body.position,{x:10,y:0})

     }

     if(keyCode === 87){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-10})

    }

    if(keyCode === 65){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:-10,y:0})

    }

    if(keyCode === 83){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:10})

    }

    if(keyCode === 73){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:-10})

    }

    if(keyCode === 74){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:-10,y:0})

    }

    if(keyCode === 75){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:10})

    }

    if(keyCode === 76){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:10,y:0})

    }


}

function isTouching(object1,object2){

  if((object1.body.position.x-object2.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object2.body.position.x-object1.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object1.body.position.y-object2.body.position.y) <= (object2.height/2 + object1.height/2)
  &&(object2.body.position.y-object1.body.position.y) <= (object2.height/2 + object1.height/2)){
 
    return true
 
  }else{
 
    return false
 
  }
 
 }

 function platformCollider(){

  p.push(platform1,platform2,platform3,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform12,
    platform13,platform14,platform15)
   
  for(var pf = 0;pf<p.length;pf++){

  if(p[pf].colour === "blue" && isTouching(player2,p[pf])){
  
    World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player2,p[pf])){
  
    p[pf].colour = "pink"
   
  
  }else if(p[pf].colour === "pink" && isTouching(player2,p[pf]) && World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }
  
  if(p[pf].colour === "pink" && isTouching(player1,p[pf])){
  
   World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player1,p[pf])){
  
    p[pf].colour = "blue"
     
     
  }else if(p[pf].colour === "blue" && isTouching(player1,p[pf]) &&  World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }

  
  }
   if(mainPlatform.colour === "brown" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
     mainPlatform.colour = "green"

     gameState = l
   
    }
  
  }

 
 