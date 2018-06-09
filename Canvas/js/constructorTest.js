// var requestAnimFrame = (function(){
//   return window.requestAnimationFrame       ||
//       window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame    ||
//       window.oRequestAnimationFrame      ||
//       window.msRequestAnimationFrame     ||
//       function(callback){
//           window.setTimeout(callback, 1000 / 60);
//       };
// })();

// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 350;

// Requiring the Sprite constructor function exported from sprite.js
// var Sprite = require("./sprite.js");

// Height and width of canvas 
var canvasWidth = 650;
var canvasHeight = 350;

// Creation of game characters
var player = new Sprite("./images/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 240, 3);
console.log(player);
console.log(typeof player.dirRight);
playerURL = new Image();

var ufo = new Sprite("./images/ufo1/ufov2.png", 696, 210, 5, 12, 0, 12, 0, 0, 0, 10, 7);
console.log(ufo);
ufoURL = new Image();

var frameRateId;

function init() {
  playerURL.src = player.url; 
  ufoURL.src = ufo.url;
  window.requestAnimationFrame(start);
}

function start() {
  frameRateId = setInterval(draw, 100);
}



function draw() {
  console.log("checking draw loop");
  updateFrame();
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
}

function stopInterval() {
  clearInterval(frameRateId);
}

// FRAME INDEX FUNC - Function to update the frame index. Updates a frames each time to render a new sprite from 0-5.
function updateFrame() {
  console.log("update frame test");
  updatePlayer();
  updateUFO();

}

// function movedirLeft() {
//   dirLeft = true;
//   dirRight = false;
// }

// function movedirRight() {
//   dirLeft = false; 
//   dirRight = true;
// }

function updateUFO() {
  console.log("1st ufo");
  // Updates the frame index
  ufo.srcCurFrame = ++ufo.srcCurFrame % ufo.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  ufo.srcx = ufo.srcCurFrame * ufo.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  // Full Screen Ping Pong Loop
  if (ufo.dirRight && ufo.dx < canvasWidth - ufo.srcWidth) {
    console.log("2nd ufo");
    // ufo.srcy = trackdirRight * ufo.srcHeight;
    ufo.dx += ufo.speed;
  }
  else if (ufo.dx > (canvasWidth - ufo.srcWidth) / 2) {
    console.log("3rd ufo");
    ufo.dirRight = false;
    ufo.dirLeft = true;
    ufo.dx -= ufo.speed;

    // if (ufo.dx === 0) {
    //   ufo.dirRight = true;
    //   ufo.dirLeft = false;
    // }
  }
  else {
    console.log(ufo.dx);
    console.log("last UFO Test");
    stopInterval(frameRateId);
    ufo.dirRight = false;
    ufo.dirLeft = false;
  }
  
}

function updatePlayer() {
  player.srcCurFrame = ++player.srcCurFrame % player.srcTotFrame;
  player.srcx = player.srcCurFrame * player.srcWidth;
  ctx.clearRect(player.dx, player.dy, player.srcWidth, player.srcHeight);
  if (player.dirRight && player.dx < (canvasWidth - player.srcWidth) / 2) {
    console.log("Player dirRight: " + player.dirRight);
    player.dx += player.speed;
  }
  else { 
    // (player.dx === (canvasWidth - player.srcWidth) / 2) {
    console.log("Player.dx: " + player.dx);
    console.log((canvasWidth - player.srcWidth) / 2)
    player.dx = (canvasWidth - player.srcWidth + 1) / 2;
    player.dirRight = false;
    player.srcCurFrame = 0;
    player.srcx = 0;
    player.srcy = 0;
    player.srcTotFrame = 1;
    // stopPlayerInterval(playerInterval);
    // player.speed = 0;
    // clearInterval();
  }
}

// 
// var playerInterval = 
init();