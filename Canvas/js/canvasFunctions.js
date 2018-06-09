// Sprite Sources: 
// https://opengameart.org/content/fumiko-complete-charset
// https://opengameart.org/content/space-soldier-m484-games But if you wish to give me credit, then you can mention "Master484" as the original author, and maybe also put a link to my website: http://m484games.ucoz.com/


// Sprite Right to 1/2 hover
function halfToHover() {
  if (right && x < (canvasWidth - width) / 2) {
    x += speed;
    if (x === ((canvasWidth - width) / 2)) {
      x = 0;
      // x -= speed;
    }
  }
};

// Sprite Full Screen PingPong Loop
function pingPong() {
  if (right && x < canvasWidth - width) {
    x += speed;
  }
  else if (x >= 0) {
    right = false;
    left = true;
    x -= speed;
    // Decrease the x coord
    if (x === 0) {
      right = true;
      left = false;
    }
  }
};

// SPRITE CONSTRUCTOR
function Sprite(url, spriteSheetW, spriteSheetH, spriteSheetRows, spriteSheetCols, srcCurFrame, srcTotFrame, srcx, srcy, dx, dy, speed) {
  this.url = url;
  this.spriteSheetW = spriteSheetW;
  this.spriteSheetH = spriteSheetH;
  this.spriteSheetRows = spriteSheetRows;
  this.spriteSheetCols = spriteSheetCols;
  this.srcCurFrame = srcCurFrame;
  this.srcTotFrame = srcTotFrame;  
  this.srcx = srcx;
  this.srcy = srcy;
  this.srcWidth = this.spriteSheetW / this.spriteSheetCols;
  this.srcHeight = this.spriteSheetH / this.spriteSheetRows;
  this.dx = dx;
  this.dy = dy;
  this.dWidth = this.srcWidth;
  this.dHeight = this.srcHeight;
  this.dirLeft = false;
  this.dirRight = true;
  this.speed = speed;
  // this.pos = pos;
//   this.size = size;
//   this.speed = 0;
//   this.frames = frames;
//   this._index = 0;
//   this.url = url;
//   this.dir = dir || "right";
}; 

// Character objects
var player = new Sprite("./images/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 240, 3);
console.log(player);
var ufo = new Sprite("./images/ufo1/ufov2.png", 696, 210, 5, 12, 0, 12, 0, 0, 0, 10, 5);
console.log(ufo);
