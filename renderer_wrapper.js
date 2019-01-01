// Wrapper functions to enable use of optional renderer in sketch.js
function strokeWeight(weight, r=null) {
    if (r) {
        r.strokeWeight(weight);
    }
    else {
        strokeWeight(weight);
    }
}

function translate(d_x, d_y, r=null) {
    if (r) {
        r.translate(d_x, d_y);
    }
    else {
        translate(d_x, d_y);
    }
}

function rotate(theta, r=null) {
    if (r) {
        r.rotate(theta);
    }
    else {
        rotate(theta);
    }
}

function stroke(colour, r=null) {
    if (r) {
        r.stroke(colour);
    }
    else {
        stroke(colour);
    }
}

function line(s_x, s_y, e_x, e_y, r=null) {
    if (r) {
        r.line(s_x, s_y, e_x, e_y);
    }
    else {
        line(s_x, s_y, e_x, e_y);
    }
}