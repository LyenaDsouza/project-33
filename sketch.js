const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  var engine, world;
  var boy,boyimg;
  var maxsnows=1000;
  var snow = [];
   var bgimage;
  
  function preload()
  { 
 
    bgimage=loadImage("snow2.jpg");
    boyimg=loadImage("boy.png");
  }
  
         function setup()

         { engine = Engine.create();
             world = engine.world; 
             createCanvas(800,600);
             boy=createSprite(200,500);
             boy.addImage(boyimg);
             boy.scale=0.3;
             
                 for(var i=0; i<maxsnows;i++)

                {
                    snow.push(new Snow(random(0,600),random(0,600),20));
                }
             
            }


   
    


function draw()
{

    background(bgimage);
    Engine.update(engine);

    boy.x=mouseX;
    
     

             drawSprites();

    
    for(var i = 0; i<maxsnows; i++){ snow[i].display();  }
    
}   

