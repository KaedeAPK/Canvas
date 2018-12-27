const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
const endX = cvs.width = window.innerWidth;
const endY = cvs.height= window.innerHeight;
const midX = cvs.width /2;
const midY = cvs.height /2;

const plane = new Image();
plane.src = './firstPlane.png';

var flag = false;
plane.onload = function() {
    flag = true;
}               

let planeX = midX; //render()内だとなぜか動かない
let dx = 5;
// plane.addEventListener('load',loaded, false);
// function loaded() {
//     render();
// }

function render() {
    c.clearRect(0,0,endX,endY);
    if (flag)        
        c.drawImage(plane, planeX,midY,64,64);
        // c.drawImage(plane, 200,200);
        requestAnimationFrame(render);
        planeX += dx;
        if (planeX < endX)
            planeX *= -1;
        else
            planeX -= dx;
        console.log(planeX);
} render();