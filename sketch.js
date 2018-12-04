class InAndOut {
  constructor() {
    let t=0.001;
  }

  draw(x_pos=40, y_pos=460, length=460, level=100, colour=[0,0,255], colour_fade=[5,3,-5], line_weight=3, animation_time=12000, master_rotate=3000)
  {
    /*
      InAndOut.draw() arguments:
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
    stroke(colour);
    strokeWeight(line_weight);
    let animation_ratio = PI/animation_time;

    translate(x_pos+length/2, y_pos - 0.5*(length/2 * tan(PI/3)));
    rotate(PI/master_rotate*millis());
    translate(-(x_pos+length/2), -y_pos + 0.5*(length/2 * tan(PI/3)))

    this.harom(x_pos + length, y_pos, x_pos, y_pos,level,(sin(animation_ratio*millis()%(2*PI))+1)/2, colour, colour_fade);
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
    //console.log(n_colour)

    this.harom(ax*ratio+cx*(1-ratio),ay*ratio+cy*(1-ratio),ax*(1-ratio)+bx*ratio,ay*(1-ratio)+by*ratio,level-1,ratio, n_colour, colour_fade);
    }
  }
}

let i = []
for (let _ = 0; _<10; _++) {
  i.push(new InAndOut(x_pos=_*30, y_pos=460, length=460, line_weight=1));
}

function setup()
{
  createCanvas(1000, 1000);
}

function draw()
{
  background(255);
  for (let _ = 0; _<10; _++) {
    i[_].draw();
  }
}
