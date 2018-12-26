const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
const endX = cvs.width = window.innerWidth;
const endY = cvs.height= window.innerHeight;
const midX = cvs.width /2;
const midY = cvs.height /2;

const plane = new Image();
plane.src = './firstPlane.png';

// var flag = false;
// plane.onload = function() {
//     flag = true;
// }               
plane.addEventListener('load',loaded, false);

function loaded() {
    render();
}

function render() {
    // if (flag)
    let planeX = midX;
        c.clearRect(0,0,endX,endY);
        c.drawImage(plane, planeX,midY,64,64);
        c.drawImage(plane, 200,200);
        console.log(planeX);
        planeX ++;
        requestAnimationFrame(render);
 } render();