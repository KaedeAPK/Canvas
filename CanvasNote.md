# Canvas Note 

## Environment
    // this makes full range of browser.
    var canvas = document.querySelector('canvas');
    var cW = canvas.width = window.innerWidth;
    var cH = canvas.height = window.innerHeight;
    var c = canvas.getContext('2d');
    var midX = cW/2;
    var midY = cH/2;

## Back Ground
    // in CSS
    canvas { background: #000;
            width: 100%; height: 100%;}
    body {margin: 0;}

## Animation
    function render() {
        c.clearRect(0,0,cW,cH);
        c.beginPath();
        hogeohoge; h++;
        requestAnimationFrame(render);
    } render();

## Draw Circle easier
    function drawCircle(x, y, r, color) {
        c.beginPath();
        c.arc(x, y, r, 0, 2*Math.PI, false);
        c.fillStyle = color;
        c.fill();
    }
    drawCircle(200,200,30, 'darkblue');

## Transformation
    // x, y => 追加移動座標
    // x1, y1, => 伸縮。 1 = 100%?
    // x2, y2 => 傾き。1 = 90?
    c.transform(x1, y2, x2, y1, x, y);

## Expand from center
    // 必要であれば初期化
    c.setTransform(1,0,0,1,0,0;)
    c.scale(2,2);
    c.translate(x + 0.5 * w , y + 0.5 * h);
    // これで図形が拡大される。

## Radial Gradient
    // x,y,r is starting value
    // x2,y2,r2 is ending value
    c.createRadialGradient(x,y,r,x2,y2,r2);

## Draw Text
    c.beginPath();
    c.fillStyle = '#fff';
    c.textAlign = "center";
    c.font = '75px serif';
    c.fillText('🎃Happy Halloween!!!🎃',endX/2,endY*.1);

## Measure Text width
    var text = c.measureText("foo"); // TextMetrics オブジェクト
    text.width; // 16;

## Draw Text Easily
    function drawText(str,x,y,color) {
    c.beginPath();
    c.fillStyle = color;
    c.textAlign = "center";
    c.font = '75px serif';
    c.fillText(str,x,y);
    } drawText('ok',endX/4,endY/2,'#f3f');

## Bezier Line
    // 2D bezier curve line.
    // (0, 0) to (endX,endY). 
    // (midX,0) is the curving point.
    c.lineWidth = "20";
    c.beginPath();
    c.moveTo(0, 0);
    c.quadraticCurveTo(midX,0,endX,endY);
    c.stroke();

    // 3D one.
    // (0, midY) to (endX,midY)
    // (endX/3,0),(midX,endY) are the curving point!
    c.beginPath();
    c.strokeStyle = '#0a0'
    c.moveTo(0, midY);
    c.bezierCurveTo(endX/3,0,midX,endY,endX,midY);
    c.stroke();

## Shadow
    c.shadowOffsetX = 0;
    // 右に0
    c.shadowOffsetY = -64;
    // 上に64の影
    c.shadowBlur = 99;
    // ぼかしの加減
    c.shadowColor = '#000';




