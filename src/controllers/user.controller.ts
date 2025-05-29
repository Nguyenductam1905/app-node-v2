import { Request, Response } from "express"
import { handleCreateUser } from "../services/user.services"

const getHomePage = (req:Request, res:Response) => {
    res.render('home', {name: 'Tam', age: 21})
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