const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
cvs.width = window.innerWidth;
cvs.height= window.innerHeight;
midX = cvs.width /2;
midY = cvs.height /2;



c.fillRect(midX,midY,100,100);
c.fillRect(midX,midY,-100,-100);

