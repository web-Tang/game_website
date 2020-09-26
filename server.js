const path = require('path')
const express = require('express')
const app = express()

const fs = require('fs')
const cors = require('cors')
const resourcePath = path.resolve(__dirname, 'dist')

app.use(cors())

app.use(express.static(resourcePath))

app.use('/data', (req, res) => {
  var getPath = req.path
  var file = path.join(__dirname, 'data' + getPath)
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.send('文件读取失败')
    } else {
      res.send(data)
    }
  })
})

app.listen(5008, () => {
  console.log('服务器启动')
})
