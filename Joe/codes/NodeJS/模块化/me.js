function eat() {
    console.log('吃饭');
}

function sleep() {
    console.log('睡觉');
}

// 暴露数据
// 方式一
module.exports = {
    eat,
    sleep
}

// 方式二
// exports.eat = eat
// exports.sleep = sleep