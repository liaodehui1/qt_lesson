const fs = require('fs')
var read = fs.createReadStream('../best.txt')
var str = ''
var best
read.on('data', (data) => {
    str += data
})
read.on('end', () => {
    best=str.split(' ').forEach(item=>parseInt(item))
})
var oMax=Math.max.apply(best)