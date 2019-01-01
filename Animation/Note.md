
# Canvas Anime Note

## Task
* loop, scale,rotate: Done!

## Mulipie Moves

### Moving
* Add None Stop Colorful Carten

### Season
* Make SunRaise and Sunset Anime => later

## Transformation
    // x, y => 追加移動座標
    // x1, y1, => 伸縮。 1 = 100%?
    // x2, y2 => 傾き。1 = 90?
    c.transform(x1, y2, x2, y1, x, y);

## Expand from center
    // 必要であれば初期化
    c.setTransform(1,0,0,1,0,0);
    c.scale(2,2);
    c.translate(x + 0.5 * w , y + 0.5 * h);
    // これで図形が拡大される。

