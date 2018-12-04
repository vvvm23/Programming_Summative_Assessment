class InAndOut {
  constructor() {
    let t=0.001;
  }

  draw(x_pos=40, y_pos=460, size=460, level=100, colour=[0,255,0], animation_time=3000, master_rotate=1500)
  {
    /*
      InAndOut.draw() arguments:
      x_pos = x position of bottom left corner of triangle
      y_pos = y position of bottom left corner of triangle
      size = Size of one side of triangle
      level = Recursion Depth of Triangles. Default = 100
      colour = Triangle Line colour. Default = [0, 0, 0]
      animation_time = Time for one complete loop of the animation in milliseconds. Default = 6000
      master_rotate = Rotational speed for entire object. Default = 0
    */
    stroke(colour);
    let animation_ratio = PI/animation_time;

    translate(x_pos+size/2, y_pos - 0.5*(size/2 * tan(PI/3)));
    rotate(PI/master_rotate*millis());
    translate(-(x_pos+size/2), -y_pos + 0.5*(size/2 * tan(PI/3)))

    this.harom(x_pos + size, y_pos, x_pos, y_pos,level,(sin(animation_ratio*millis()%(2*PI))+1)/2);
  }

  harom(ax, ay, bx, by, level, ratio)
  {
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
    this.harom(ax*ratio+cx*(1-ratio),ay*ratio+cy*(1-ratio),ax*(1-ratio)+bx*ratio,ay*(1-ratio)+by*ratio,level-1,ratio);
    }
  }
}

let i = new InAndOut();
function setup()
{
  createCanvas(540, 540);
  strokeWeight(3);
}

function draw()
{
  background(240);
  i.draw()
}
