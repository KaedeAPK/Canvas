# Chap04 Techs

## Temp, これで画像が読み込める

    const img = new Image();
    img.src = './ships.png';
    var flag = false;
    img.onload = function() {
        flag = true;
    };

    function render() {
    c.clearRect(0,0,endX,endY);
    if (flag)        
        c.drawImage(img...)
    }
        requestAnimationFrame(render);
    render();

## 画像の大きさ、px数の確認
    imgW = img.naturalWidth;
    console.log('imgW');

## フレーム数の減少を故意に起こす
```
counter++;
c.drawImage(myShips, (counter<6)*px,0,px,px,
    midX,100+size,size,size);
if (11 < counter)// ex(3,5),(13,29),(5,10)
    counter = 0;
```

* 0<3, 1<3, 2<3, : True --> 1として演算される
* 3<3, 4<3, 5<3 : False --> 0として演算される
* デフォルトは1000/30fps
    * 1-14,15-30で分けると0.5sごとに切り替えになる。
    * よって上記ではdefaultの1/3の切り替わり速度になる

```
var sy = Math.floor((tileIndex)/8)*px;

tileIndex++;
if (9 == tileIndex)
    tileIndex = 1;// 0-7 -> 1-8
```
* このコードでtileIndexが8の時だけy座標が1になる
