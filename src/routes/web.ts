import express, { Request, Response, Express} from 'express'
import { 
    getCreateUserPage, 
    getHomePage, 
    handleDeleteUser, 
    postCreateUser,
    handleViewUser,
    handleUpdateUser
} from 'controllers/user.controller'
import { updateUserById } from 'services/user.services'
const router = express.Router()

const webRoute = (app: Express) => {

    router.get('/', getHomePage)

    router.get('/create-user', getCreateUserPage)

    router.post('/handle-create-user', postCreateUser)

    router.post('/handle-delete-user/:id', handleDeleteUser)

    router.get('/view-detail-user/:id', handleViewUser)

    router.post('/handle-update-user/:id', handleUpdateUser)

    app.use('/', router)

}


export default webRoute