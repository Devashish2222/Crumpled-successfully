class Paper{
    constructor(x,y,radius) {
        var options = {
            'restituton' : 0.8,
            'friction' : 0.3,
            'density' : 1.2
        }
        
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(x, y,radius, options);
        World.add(world, this.body);
            
    }

    display(){
      var pos = this.body.position;
	 
	 
      push();
     translate(pos.x, pos.y);
     rectMode(CENTER);
     strokeWeight(3);
     stroke("Green");
     fill(25);
     ellipse(0, 0, this.radius);
     pop();
      }
    }