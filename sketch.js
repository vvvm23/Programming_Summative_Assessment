class InAndOut {
  constructor(x_pos=40, y_pos=460, length=460, level=100, colour=[0,0,255], colour_fade=[3,0,-3], line_weight=1, animation_time=12000, master_rotate=3000) {
      /*
        InAndOut.constructor() arguments:
        x_pos = x position of bottom left corner of triangle. Default = 40
        y_pos = y position of bottom left corner of triangle. Default = 460
        length = Size of one side of triangle. Default = 460
        level = Recursion Depth of Triangles. Default = 100
        colour = Triangle Line colour. Default = [0, 0, 0]
        colour_fade = Add value to colour elementwise every recursive call. Default = [5, 0, -5]
        line_weight = Thickness of drawn line. Default = 3
        animation_time = Time for one complete loop of the animation in milliseconds. Default = 6000
        master_rotate = Rotational speed for entire object. Default = 0
      */
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.length = length;
    this.level = level;
    this.colour = colour;
    this.colour_fade = colour_fade;
    this.line_weight = line_weight;
    this.animation_time = animation_time;
    this.master_rotate = master_rotate;
  }

  draw()
  {
    /*
      Call this function in the p5 draw() master function in order to draw and update the InAndOut object every frame.
    */
    let colour = this.colour; // Place this.colour in a local variable so to avoid changing original value if colour_fade enabled
    let level = this.level; // Likewise, place this.level in a local variable so original value is remembered.
    strokeWeight(this.line_weight); // Set thickness of the line
    let animation_ratio = PI/this.animation_time; // Determine value to multiply ratio by. PI/time

    // Translate to centre of screen and then rotate before then translating back to origin.
    translate(this.x_pos+this.length/2, this.y_pos - 0.5*(this.length/2 * tan(PI/3)));
    rotate(PI/this.master_rotate*millis());
    translate(-(this.x_pos+this.length/2), -this.y_pos + 0.5*(this.length/2 * tan(PI/3)))

    // Call harom function
    this.harom(this.x_pos + this.length, this.y_pos, this.x_pos, this.y_pos, level, (sin(animation_ratio*millis()%(2*PI))+1)/2, colour, this.colour_fade);
  }

  harom(ax, ay, bx, by, level, ratio, colour, colour_fade)
  {
    stroke(colour) // Set colour of line
    if(level!=0) // If level > 0 then continue recursive operation
    {
      // Calculate new coordinates of triangle points
      let vx=bx-ax;
      let vy=by-ay;
      let nx=cos(PI/3)*vx-sin(PI/3)*vy;
      let ny=sin(PI/3)*vx+cos(PI/3)*vy;
      let cx=ax+nx;
      let cy=ay+ny;
      // Draw lines from point to point
      line(ax,ay,bx,by);
      line(ax,ay,cx,cy);
      line(cx,cy,bx,by);

      // Add colour_fade to colour elementwise
      let n_colour = [0, 0, 0];
      n_colour[0] = colour[0] + colour_fade[0];
      n_colour[1] = colour[1] + colour_fade[1];
      n_colour[2] = colour[2] + colour_fade[2];

      // Call harom recursively with updated arguments
      this.harom(ax*ratio+cx*(1-ratio),ay*ratio+cy*(1-ratio),ax*(1-ratio)+bx*ratio,ay*(1-ratio)+by*ratio,level-1,ratio, n_colour, colour_fade);
    }
  }
}

let i = new InAndOut()
function setup()
{
  createCanvas(1000, 1000);
}

function draw()
{
  // Clear screen
  background(255);

  // Draw box around canvas
  stroke(0);
  strokeWeight(1);
  rect(0, 0, 999, 999);
  i.draw() // Call object draw
}

function form_change_handler() {
  // Get values from html form
  var xp = document.getElementById("x").value;
  var yp = document.getElementById("y").value;
  var len = document.getElementById("length").value;
  var lvl = document.getElementById("level").value;
  var col = document.getElementById("colour").value;
  var colf = document.getElementById("colour_fade").value;
  var lw = document.getElementById("line_weight").value;
  var at = document.getElementById("animation_time").value;
  var mt = document.getElementById("master_time").value;

  // Set object attributes to new values
  i.x_pos = parseInt(xp);
  i.y_pos = parseInt(yp);
  i.length = parseInt(len);
  i.level = parseInt(lvl);
  i.colour = col.split(',').map(function(_) {return parseInt(_)}); // Parse comma delimited
  i.colour_fade = colf.split(',').map(function(_) {return parseInt(_)}); // Parse comma delimited
  i.line_weight = parseInt(lw);
  i.animation_time = parseInt(at);
  i.master_rotate = parseInt(mt);
}
