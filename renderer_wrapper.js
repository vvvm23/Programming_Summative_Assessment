// Wrapper functions to enable use of optional renderer in sketch.js
function strokeWeight(weight, r=null) {
    if (r==null) {
        r.strokeWeight(weight);
    }
    else {
        strokeWeight(weight);
    }
}

function translate(d_x, d_y, r=null) {
    if (r==null) {
        r.translate(d_x, d_y);
    }
    else {
        translate(d_x, d_y);
    }
}

function rotate(theta, r=null) {
    if (r==null) {
        r.rotate(theta);
    }
    else {
        rotate(theta);
    }
}

function stroke(colour, r=null) {
    if (r==null) {
        r.stroke(colour);
    }
    else {
        stroke(colour);
    }
}

function line(s_x, s_y, e_x, e_y, r=null) {
    if (r==null) {
        r.line(s_x, s_y, e_x, e_y);
    }
    else {
        line(s_x, s_y, e_x, e_y);
    }
}