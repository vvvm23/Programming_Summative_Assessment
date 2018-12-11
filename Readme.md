# In and Out animation object documentation #
## Description ##
Animation in p5 that generates a recursive "triangle-within-triangle" structure that oscilliates in and out in a harmonic fashion. Optional parameters to adjust position in canvas, size, colour and more.

---
## Requirements ##
* p5
* ESCRIPT 2018
---
## Usage ##
```javascript
  var i;
  var cnv; // Add optional arguments here

  function setup() {
    i = new InAndOut();
    cnv = createCanvas(canvasWidth, canvasHeight)
    // Your setup procedure here
  }

  function draw(){
    // Other drawing procedures here
    i.draw(cnv);
  }
```
---
## Arguments ##
#### constructor(x_pos, y_pos, length, level, colour, colour_fade, line_weight, animation_time, master_rotate)
```
  x_pos: X position of bottom left corner of triangle. Default = 40
  y_pos: Y position of bottom left corner of triangle. Default = 460
  length: Size of the side of the largest triangle. Default = 460
  level: Recursion depth of triangles. Default = 100
  colour: Triangle line colour as a array. Default = [0, 0, 0]
  colour_fade: Value to add to colour each recursive call as an array. Default = [0, 0, 0]
  line_weight: Thickness of drawn line. Default = 1
  animation_time: Time for one complete loop of the animation in milliseconds. Default = 6000
  master_rotate: Time for one rotation of entire object in milliseconds. Default = 0
```
#### draw(r) ####
```
  r: Graphic or Canvas to draw object on. p5.Renderer object. No default value as must be explicitly referenced.
```
---

## Examples ##
#### Example 1 ####
```javascript
/* Create new object at x = 500, y = 500 of size = 200
  Recursion depth of 100, colour Blue with a fade of [3, 0, -3]*/
var i;
var cnv;
function setup()
  i = new InAndOut(500, 500, 200, 100, [0, 0, 255], [3, 0, -3]);
  cnv = createCanvas(1000, 1000);
  // Your setup procedure here
}

function draw(){
  // Other drawing procedures here
  i.draw(cnv);
}  
```
#### Example 2 ####
```javascript
// Define multiple objects and draw them together
var i = []
var cnv
function setup() {
  cnv = createCanvas(1000, 1000)
  i[0] = new InAndOut(500, 500, 200, 100, [0, 0, 255], [3, 0, -3]);
  i[1] = new InAndOut(400, 500, 200, 100, [0, 255, 0], [3, -3, 3]);
  i[2] = new InAndOut(300, 500, 200, 100, [255, 0, 0], [-3, 0, 3]);
  // Your setup procedure here
}

function draw(){
  // Other drawing procedures here
  for (let _ = 0; _ < 3; _++){
    i[_].draw(cnv);  
  }
}  
```
#### Example 3 ####
```javascript
  // Define rotating object with increased line weight.


  var i
  var cnv
  function setup() {
    cnv = createCanvas(1000, 1000);
    i = new InAndOut(500, 500, 200, 100, [0, 0, 255], [3, 0, -3], 3, 1500, 3000);
    // Your setup procedure here
  }

  function draw(){
    // Other drawing procedures here
    i.draw(cnv);
  }  
```
---

## Original Source ##

[Original Source in Processing here](https://www.openprocessing.org/sketch/563267)
---
