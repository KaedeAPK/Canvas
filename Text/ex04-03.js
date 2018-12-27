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

    if (flag)        
        c.drawImage(myShips, 0,0,32,32,midX,midY,64,64);
        c.drawImage(myShips, 32,0,32,32,midX,midY+64,64,64);
        c.drawImage(myShips, 64,0,32,32,midX,midY+128,64,64);
        c.drawImage(myShips, 96,0,32,32,midX,midY+192,64,64);
        
        requestAnimationFrame(render);
} render();

// ---- sample code ----

// var ships=new Image();
// ships.addEventListener('load', eventShipLoaded, false);
// ships.src="ships.png";

// function eventShipLoaded() {
//     drawScreen();
// }

// function drawScreen() {

//     //draw a background so we can wee the Canvas edges
//     c.fillStyle="#aaaaaa";
//     c.fillRect(0,0,500,500);
//     c.drawImage(ships, 32, 0, 32, 32, 50, 50, 64, 64);

// }

