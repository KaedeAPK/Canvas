// by chap04.html
const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
const endX = cvs.width = window.innerWidth;
const endY = cvs.height= window.innerHeight;
const midX = cvs.width /2;
const midY = cvs.height /2;

var imgW;

const myShips = new Image();
myShips.src = './ships.png';

var flag = false;
myShips.onload = function() {
    flag = true;
    imgW = myShips.naturalWidth;
};       

// c.drawImage(var of image, sx, sy, sw, sh, x, y, width , height)

function render() {
    const px = 32; const size = 64;
    c.clearRect(0,0,endX,endY);
    for (i = 0; i<imgW/px; i++) {
        if (flag)        
        c.drawImage(myShips, i*px,0,px,px,
            midX,100+(i*size),size,size);
    }
        requestAnimationFrame(render);
} render();


     
