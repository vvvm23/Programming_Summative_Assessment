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
    let colour = this.colour;
    let level = this.level;
    stroke(colour);
    strokeWeight(this.line_weight);
    let animation_ratio = PI/this.animation_time;

    translate(this.x_pos+this.length/2, this.y_pos - 0.5*(this.length/2 * tan(PI/3)));
    rotate(PI/this.master_rotate*millis());
    translate(-(this.x_pos+this.length/2), -this.y_pos + 0.5*(this.length/2 * tan(PI/3)))

    this.harom(this.x_pos + this.length, this.y_pos, this.x_pos, this.y_pos, level, (sin(animation_ratio*millis()%(2*PI))+1)/2, colour, this.colour_fade);
  }

  harom(ax, ay, bx, by, level, ratio, colour, colour_fade)
  {
    stroke(colour)
    if(level!=0){
    let vx=bx-ax;
    let vy=by-ay;
    let nx=cos(PI/3)*vx-sin(PI/3)*vy;
    let ny=sin(PI/3)*vx+cos(PI/3)*vy;
    let cx=ax+nx;
    let cy=ay+ny;
    line(ax,ay,bx,by);
    line(ax,ay,cx,cy);
    line(cx,cy,bx,by);

    let n_colour = [0,0,0]
    n_colour[0] = colour[0] + colour_fade[0]
    n_colour[1] = colour[1] + colour_fade[1]
    n_colour[2] = colour[2] + colour_fade[2]

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
  background(255);
  stroke(0);
  strokeWeight(1);
  rect(0, 0, 999, 999);
  i.draw()
}

function form_change_handler() {
  console.log("Form changed");
  var xp = document.getElementById("x").value;
  var yp = document.getElementById("y").value;
  var len = document.getElementById("length").value;
  var lvl = document.getElementById("level").value;
  var col = document.getElementById("colour").value;
  var colf = document.getElementById("colour_fade").value;
  var lw = document.getElementById("line_weight").value;
  var at = document.getElementById("animation_time").value;
  var mt = document.getElementById("master_time").value;
  console.log(xp, yp, len, lvl, col, colf, lw, at, mt)

  i.x_pos = parseInt(xp);
  i.y_pos = parseInt(yp);
  i.length = parseInt(len);
  i.level = parseInt(lvl);
  i.colour = col.split(',').map(function(_) {return parseInt(_)});
  i.colour_fade = colf.split(',').map(function(_) {return parseInt(_)});
  i.line_weight = parseInt(lw);
  i.animation_time = parseInt(at);
  i.master_rotate = parseInt(mt);
}
