class bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.x=x;
      this.y=y;
      this.r=radius;
      
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;
      push();
      translate(paperpos.x, paperpos.y);
      fill("pink");
      ellipse(0,0,this.r);
      pop();
      
    }
  };