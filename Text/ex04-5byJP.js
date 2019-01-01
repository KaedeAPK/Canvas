// by chap04.html
const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
const endX = cvs.width = window.innerWidth;
const endY = cvs.height= window.innerHeight;
const midX = cvs.width /2;
const midY = cvs.height /2;

const px = 32; const size = 64;

var imgW;

const tile = new Image();
tile.src = './pic/tanks_sheet.png';

var flag = false;
tile.onload = function() {
    flag = true;
    imgW = tile.naturalWidth;
};

var counter = 1;
var tileIndex = 1;

// c.drawImage(var of image, sx, sy, sw, sh,
//  x, y, width , height)

function render() {
    var sx = ((tileIndex) % 8)*px;
    // 1 % 8 *32 => 32
    // 2 % 8 *32 => 64
    // 7 % 8 *32 => 224
    // 8 % 8 *32 => 0
    // 1 % 8 *32 => 32
    

    var sy = Math.floor((tileIndex)/8)*px;
    // 1-7:    を0に: 7/8
    // 8: の時だけ1に:
    console.log('sx,sy:',sx,sy);

    c.clearRect(0,0,endX,endY);
    if (flag) 
    c.drawImage(tile, sx + 1, sy + 1, px, px - 1, 
        midX,100+size, size, size);
    tileIndex = tileIndex % 8 + 1;

        requestAnimationFrame(render); // 1000/30fps
} render();