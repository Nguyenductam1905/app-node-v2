import express from 'express'
import router from './routes/web'
import webRoute from './routes/web'

const app = express()

//use .env file
let dotenv = require('dotenv').config()
const port = dotenv['parsed'].PORT||3000


//config static file
app.use(express.static('public'))


//set engine
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//route
webRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

