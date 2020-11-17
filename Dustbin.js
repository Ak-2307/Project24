class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'friction': 1,
          'isStatic': true 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(0,0,255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  