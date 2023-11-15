// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // update the size of the element we render
    update() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
  
    // render the element on the screen
    // by default the shape will be a point/circle
    show() {
      stroke(255);
      strokeWeight(25);
      point(this.x, this.y);
    }   
  }


  class Box extends Particle {
    constructor(x, y) {
      super(x, y);
      this.bright = random(255);
      this.r = 10;
    }
  
    update() {
      super.update();
      this.r += random(-8, 8);
    }
  
    show() {
      strokeWeight(1);
      stroke(255);
      fill(this.bright);
      square(this.x, this.y, this.r);
    }
  }

  class Triangle extends Particle {
    constructor(x, y) {
      super(x, y);
      this.angle = random(TWO_PI); // Random initial angle
      this.r = 30; // Size of the triangle
    }
  
    update() {
      super.update(); // Calls the parent update method for basic movement
      this.angle += 0.02; // Slowly changes the angle for rotation over time
      // Additional movement logic can go here
    }
  
    show() {
      push(); // Start a new drawing state
      translate(this.x, this.y); // Move to the particle's location
      rotate(this.angle); // Rotate by the current angle
      noStroke(); // No border for the triangle
      fill(random(255), random(255), random(255), 1000); // Random fill color with some transparency
      
      // Calculate the vertices for the triangle
      let x1 = -this.r * cos(PI/6);
      let y1 = this.r * sin(PI/6);
      let x2 = this.r * cos(PI/6);
      let y2 = this.r * sin(PI/6);
      let x3 = 0;
      let y3 = -this.r;
  
      triangle(x1, y1, x2, y2, x3, y3); // Draw the triangle
      pop(); // Restore original state
    }
  }
  




  let p1, p2, p3;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Triangle(300,300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
}
