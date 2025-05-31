import { Request, Response } from "express"
import { handleCreateUser, getAllUserAPI } from "services/user.services"

const getHomePage = async (req:Request, res:Response) => {
    const users = await getAllUserAPI()
    res.render('home', {users:users})
}

const getCreateUserPage = (req:Request, res:Response) => {
    res.render('create-user')
}

const postCreateUser = (req:Request, res:Response) => {
    const {fullName, email, address} = req.body
    handleCreateUser(fullName, email, address)
    res.redirect('/')
}


export {getHomePage, getCreateUserPage, postCreateUser}