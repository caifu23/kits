var kits = {};

//随机整数
kits.randomInt = function(n, m) {
    // 随机整数区间[n, m)
    return Math.floor(Math.random() * (m - n + 1) + n);
}

// 随机rgb颜色
kits.randomRGB = function() {
    var r = kits.randomInt(0,255);
    var g = kits.randomInt(0,255);
    var b = kits.randomInt(0,255);
    return 'rgb('+ r +', '+g+', '+b+')';
}

// 随机十六进制颜色
kits.randomHexColor = function() {
    // var hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    // var hex1 = hexArr[kits.randomInt(0, 16)];
    // var hex2 = hexArr[kits.randomInt(0, 16)];
    // var hex3 = hexArr[kits.randomInt(0, 16)];
    // var hex4 = hexArr[kits.randomInt(0, 16)];
    // var hex5 = hexArr[kits.randomInt(0, 16)];
    // var hex6 = hexArr[kits.randomInt(0, 16)];

    // return '#'+hex1+hex2+hex3+hex4+hex5+hex6;
    // 法一
    // var hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    // var color = ['#'];
    // for(var i=0; i<6; i++) {
    //     var hex = hexArr[kits.randomInt(0, hexArr.length)];
    //     color.push(hex);
    // }
    // return color.join('');


    //法二
    var color = ['#'];
    for(var i=0; i<6; i++) {
        var hex = kits.randomInt(0, 16).toString(16);
        color.push(hex);
    }
    return color.join('');

}


// 模拟 Math.max 求最大值
kits.getMax = function() {
    console.log(arguments);
    var max = arguments[0];
    for(var i=1; i<arguments.length; i++) {
        if(max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}


