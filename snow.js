class Snow 
{

    constructor(x,y,r)
    {
      
        var options=
        {
            friction:0.1,
            density:0.1,

        }
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("snow5.webp")
        this.r=r;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        

    }

    display()
    {
       image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
       

    }

    
}