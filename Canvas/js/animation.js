// Create the canvas and attaches to html
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "lighter";
canvas.width = 650;
canvas.height = 350;

// Height and width of canvas 
var canvasWidth = 650;
var canvasHeight = 350;

// paris, mumbai, moscow all need to be changed
var backgrounds = {
  cairoBkgrd: "./images/backgrounds/cairo.jpg",
  parisBkgrd: "./images/backgrounds/paris.jpg",
  laBkgrd: "./images/backgrounds/la.jpg",
  mumbaiBkgrd: "./images/backgrounds/mumbai.jpg",
  saopaoloBkgrd: "./images/backgrounds/saopaolo.jpg",
  shanghaiBkgrd: "./images/backgrounds/shanghai.jpg",
  sydneyBkgrd: "./images/backgrounds/sydney.jpg",
  moscowBkgrd: "./images/backgrounds/moscow.jpg",
  nycBkgrd: "./images/backgrounds/nyc.jpg"
}

// Creation of game characters
var player = new Sprite("./images/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 260, 3);
var ufo = new Sprite("./images/ufo1/ufov2.png", 696, 210, 5, 12, 0, 12, 0, 0, 0, 10, 7);
// The variable to hold the setInterval() in start()
var frameRateId;

// Creates url in correct formate for the drawImage();
playerURL = new Image();
ufoURL = new Image();

function init() {
  playerURL.src = player.url; 
  ufoURL.src = ufo.url;
  window.requestAnimationFrame(start);
}

function start() {
  // ctx.drawImage(background, 0, 0);
  frameRateId = setInterval(draw, 100);
}

function draw() {
  // console.log("checking draw loop");
  updateFrame();
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

// Splits out into separate sprite functions to update sprite frames from sprite sheet and animate across page.
function updateFrame() {
  // console.log("update frame test");
  updateUFO();
  updatePlayer();
}

// Move UFO across full Screen and stops in middle above player
function updateUFO() {
  // console.log("1st ufo");
  // Updates the frame index
  ufo.srcCurFrame = ++ufo.srcCurFrame % ufo.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  ufo.srcx = ufo.srcCurFrame * ufo.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  // Movement logic
  if (ufo.dirRight && ufo.dx < canvasWidth - ufo.srcWidth) {
    // console.log("2nd ufo");
    ufo.dx += ufo.speed;
  }
  else if (ufo.dx > (canvasWidth - ufo.srcWidth) / 2) {
    // console.log("3rd ufo");
    ufo.dirRight = false;
    ufo.dirLeft = true;
    ufo.dx -= ufo.speed;
  }
  else {
    // console.log("last UFO Test");
    // stopInterval(frameRateId);
    ufo.dirRight = false;
    ufo.dirLeft = false;
  }
}

// Moves the player from left side to middle of canvas
function updatePlayer() {
  // Updates the frame index
  player.srcCurFrame = ++player.srcCurFrame % player.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  player.srcx = player.srcCurFrame * player.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(player.dx, player.dy, player.srcWidth, player.srcHeight);
  // Movement logic
  if (player.dirRight && player.dx < (canvasWidth - player.srcWidth) / 2) {
    player.dx += player.speed;
  }
  else { 
    player.dx = (canvasWidth - player.srcWidth + 1) / 2;
    player.dirRight = false;
    player.srcCurFrame = 0;
    player.srcx = 0;
    player.srcy = 0;
    player.srcTotFrame = 1;
  }
}

function stopInterval() {
  clearInterval(frameRateId);
}

// STARTS THE ANIMATION
init();