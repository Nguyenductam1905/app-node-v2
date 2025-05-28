import express, { Request, Response, Express} from 'express'
const router = express.Router()

const webRoute = (app: Express) => {
    router.get('/', (req, res) => {
    res.send('<h1 style="color:red;">Hello World! 123</h1>')
    })

    router.get('/test', (req: Request, res: Response) => {
    res.render('test', { name: 'Tam', age: 21 })
    })
    app.use('/', router)
}


export default webRoute