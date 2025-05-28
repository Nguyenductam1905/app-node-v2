import express from 'express'

const app = express()

//use .env file
let dotenv = require('dotenv').config()
const port = dotenv['parsed'].PORT||3456

//niceeeeee
app.get('/', (req, res) => {
  res.send('<h1 style="color:red;">Hello World! 123</h1>')
})

app.get('/test', (req, res) =>{
    res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;