class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=80;

		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.shapeColor='blue'

		World.add(world, this.bottomBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;

			push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,this.wallThickness, this.dustbinHeight);
			pop()
    }
}