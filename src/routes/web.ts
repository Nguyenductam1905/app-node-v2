import express, { Request, Response, Express } from 'express'
import {
    getCreateUserPage,
    getHomePage,
    handleDeleteUser,
    postCreateUser,
    handleViewUser,
    handleUpdateUser
} from 'controllers/user.controller'
import { updateUserById } from 'services/user.services'
import { getDashboardPage, getAdminUserPage, getAdminOrderPage, getAdminProductPage } from 'controllers/admin/dashboard.controller'
const router = express.Router()

const webRoute = (app: Express) => {

    router.get('/', getHomePage)

    router.get('/create-user', getCreateUserPage)

    router.post('/handle-create-user', postCreateUser)

    router.post('/handle-delete-user/:id', handleDeleteUser)

    router.get('/view-detail-user/:id', handleViewUser)

    router.post('/handle-update-user/:id', handleUpdateUser)

    // Admin routes
    router.get("/admin", getDashboardPage);
    router.get("/admin/user", getAdminUserPage);
    router.get("/admin/order", getAdminOrderPage);
    router.get("/admin/product", getAdminProductPage);


    app.use('/', router)

}


export default webRoute