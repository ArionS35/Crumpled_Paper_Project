class Paper{
    constructor(x,y,w,h){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
           }

           this.x=x;
           this.y=y;
           this.w=w;
           this.h=h;
           this.image = loadImage("sprites/paper.png");
           //this.image.scale=300;
           this.scale=0.003;
           this.body=Bodies.rectangle(x, y, w, h , options);
           World.add(world, this.body);
   
        }      
        
        display()
	{
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			image(this.image,0,0,this.w, this.h);
			pop()
    }
    }
