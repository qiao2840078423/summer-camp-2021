// 与字符串的转换
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf.toString());

console.log(buf[0].toString(2));

buf[1] = 100

// 溢出
buf[2] = 361

console.log(buf);