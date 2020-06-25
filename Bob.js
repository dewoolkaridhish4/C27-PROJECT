class Bob {
    constructor(x, y,radius) {
      var options = {
          frictionAir:0,
          isStatic:false,
          restitution:1,
          friction:0.75,
          density:0.4
      }

      this.body =Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      fill("pink");
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,80,80);
    }
  }