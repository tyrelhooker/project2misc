var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 350;

var requestID;

function repeat() {
  requestAnimationFrame(repeat);
}

requestAnimationFrame(repeat);