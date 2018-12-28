// by chap04.html
const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
const endX = cvs.width = window.innerWidth;
const endY = cvs.height= window.innerHeight;
const midX = cvs.width /2;
const midY = cvs.height /2;

const myShips = new Image();
myShips.src = './ships.png';

var flag = false;
myShips.onload = function() {
    flag = true;
};       

// c.drawImage(var of image, sx, sy, sw, sh, x, y, width , height)

function render() {
    c.clearRect(0,0,endX,endY);
    for (i = 0; i<8; i++) {
        if (flag)        
        c.drawImage(myShips, i*32,0,32,32,midX,100+(i*64),64,64);
    }
        requestAnimationFrame(render);
} render();


