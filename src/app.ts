import express from 'express'
// import router from './routes/web'
import webRoute from 'routes/web'
import initdatabase from 'src/config/seed'

const app = express()

//use .env file
let dotenv = require('dotenv').config()
const port = dotenv['parsed'].PORT||8000


//config static file
app.use(express.static('public'))


//set engine
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//set body params
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//route
webRoute(app)

//seeding data
initdatabase()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

