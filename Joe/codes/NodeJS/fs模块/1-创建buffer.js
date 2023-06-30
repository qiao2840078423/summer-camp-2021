// 1. alloc
let buf = Buffer.alloc(10)
console.log(buf);

//2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10)
console.log(buf_2);

//3. from
let buf_3 = Buffer.from("hello")
let buf_4 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(buf_3);
console.log(buf_4);