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

var counter = 1;


// c.drawImage(var of image, sx, sy, sw, sh, 
//  x, y, width , height)

function render() {
    const px = 32; const size = 64;
    c.clearRect(0,0,endX,endY);
        if (flag)        // 0: false, 演算にBoolを使うとTrueが1
        // 0<3,1<3, 2<3, : True
        // 3<3, 4<3, 5<3 : False
        // 0...13: T
        // 14...29: F ==> 15Flameごとに! 0.5sです
        c.drawImage(myShips, (counter<6)*px,0,px,px,
            midX,100+(size),size,size);
        counter++;
        if (11 < counter)// (3,5),(13,29),(5,10)
            counter = 0;
        console.log(counter);
        requestAnimationFrame(render); // 1000/30fps 
} render();



