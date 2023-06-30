const fs = require('fs')

const ws = fs.createWriteStream('./test3.txt')

ws.write("第一行\n")
ws.write("第二行\n")

ws.close()