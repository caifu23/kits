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


/* 计算两个时间的时间差，返回 相差的 天/时/分/秒 */
kits.getDateInterval = function(start, end) {
    var day, hour, minute, second, interval;
    interval = (end - start) ; //时间差
    interval = interval / 1000; //毫秒转为秒数
    second = Math.round(interval % 60); //秒
    minute = Math.round( interval / 60 % 60 ); //分
    hour = Math.round(interval / 60 /60 % 24); //时
    day = Math.round(interval / 60 / 60 / 24 ); //日期

    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}



// 数组去重
// 数组去重
/* 编写一个方法去掉一个数组的重复元素 */
// 法一：双重遍历（耗时n*(n-1)）
kits.removeRepeat = function(arr) {
    for(var i=0; i<arr.length; i++) {
        for(var j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j,1);
            }
        }
    }
    return arr;
}
// console.log(kits.removeRepeat([2,4,11,11,0,3,2,12,90]));

//法二：将数组元素，和重复个数 ---- 键值对 存储在对象 
// 耗时： 小于2n
kits.rmRepeat = function(arr) {
    var obj = {};
    // 遍历数组元素，和重复数 以键值对存储
    for(var i=0; i<arr.length; i++) {
        if(obj[arr[i]]) {
            // 属性值在加一
            obj[arr[i]] ++;
        }else {
            // 原先属性无，则添加属性并赋值 1
            obj[arr[i]] = 1;
        }
    }
    // console.log(obj);

    // 新建新数组
    var newArr = [];
    // 遍历对象 的 属性，并加入数组
    for(var k in obj) {
        newArr.push(k);
    }

    // 返回新数组
    return newArr;
    
}


