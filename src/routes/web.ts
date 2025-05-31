import express, { Request, Response, Express} from 'express'
import { getCreateUserPage, getHomePage, postCreateUser } from 'controllers/user.controller'
const router = express.Router()

const webRoute = (app: Express) => {

    router.get('/', getHomePage)

    router.get('/create-user', getCreateUserPage)

    router.post('/handle-create-user', postCreateUser)

    app.use('/', router)
}


export default webRoute