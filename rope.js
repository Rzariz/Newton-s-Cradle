class rope{
	constructor(body1, body2, offsetX, offsetY)
	{
		this.offsetX = offsetX
		this.offsetY = offsetY
		var options={
			bodyA : body1,
			bodyB : body2,
			pointB : {x : this.offsetX , y : this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var posA  =this.rope.bodyA.position;
		var posB = this.rope.bodyB.position;
		stroke("coral")
		strokeWeight(3);
		line( posA.x, posA.y ,posB.x + this.offsetX , posB.y + this.offsetY);
	}

}