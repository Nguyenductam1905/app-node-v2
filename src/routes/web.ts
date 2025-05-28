import express, { Request, Response, Express} from 'express'
import { getHomePage } from '../controllers/user.controller'
const router = express.Router()

const webRoute = (app: Express) => {

    router.get('/', getHomePage)

    app.use('/', router)
}


export default webRoute