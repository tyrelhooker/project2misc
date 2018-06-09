var Sprite = function (url, spriteSheetW, spriteSheetH, spriteSheetRows, spriteSheetCols, srcCurFrame, srcTotFrame, srcx, srcy, dx, dy, speed) {
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


// module.exports = Sprite;