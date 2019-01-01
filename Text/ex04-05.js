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
var tileIndex = 1; //0-7

// c.drawImage(var of image, sx, sy, sw, sh, 
//  x, y, width , height)

function render() {

    // 1 % 8 = 1... x32
    // 2 % 8: 2 x32
    // 9 % 8: 1 x 32
    
    var sx = (tileIndex)%8*px;
    
// ex04-05.js:41 sx,sy: 224 0
// ex04-05.js:41 sx,sy: 0 32
// ex04-05.js:41 sx,sy: 32 0

    // tileIndex: loop 1,2...8,1,2
    var sy = Math.floor(tileIndex/8)*px;
    console.log('sx,sy:',sx,sy);

    c.clearRect(0,0,endX,endY);
        if (flag)
        c.drawImage(tile, sx,sy,px,px,
            midX,100+(size),size,size);
                
        tileIndex++;
        if (9 == tileIndex)
            tileIndex = 1;// 1->8
            
        requestAnimationFrame(render); // 1000/30fps 
} render();
