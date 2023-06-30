const fs = require('fs')

// 方式一
let data = fs.readFileSync('./images/yoga.jpg')
fs.writeFileSync('./images/yoga_copy.jpg', data)

// 方式二
const rs = fs.createReadStream('./images/yoga.jpg')
const ws = fs.createWriteStream('./images/yoga_copy2.jpg')
const ws2 = fs.createWriteStream("./images/yoga_copy3.jpg")

rs.on("data", chunk => {
    ws.write(chunk)
})

// 方式三
rs.pipe(ws2)