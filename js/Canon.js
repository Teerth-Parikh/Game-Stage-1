class Cannon {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
    }
    display() {
      
      if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
        this.angle -= 0.02;
      }
  
      fill("#676e6a");
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      rect(-10, -20, this.width, this.height);
      pop();
      arc(this.x - 40, this.y + 80, 180, 230, PI, TWO_PI);
      // rotate(this.angle);
     // rect(0, 0, this.width, this.height);
     // pop();
      //arc(0, 0, 180, 230, PI, TWO_PI);
     // arc(this.x , this.y, 600, 600, PI, TWO_PI);
      //arc(50, 50, 500, 700, 0, PI, TWO_PI);
      
      noFill();
    }
  }