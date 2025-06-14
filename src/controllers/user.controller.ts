import { log } from "console"
import { Request, Response } from "express"
import { handleCreateUser, getAllUserAPI, deleteUserById, getUserById, updateUserById } from "services/user.services"

const getHomePage = async (req:Request, res:Response) => {
    const users = await getAllUserAPI()
    res.render('home', {users:users})
}

const getCreateUserPage = (req:Request, res:Response) => {
    res.render('create-user')
}

const postCreateUser = async (req:Request, res:Response) => {
    const {fullName, email, address} = req.body
    await handleCreateUser(fullName, email, address)
    res.redirect('/')
}

const handleDeleteUser = async (req:Request, res:Response) => {
    await deleteUserById(parseInt(req.params.id))
    console.log(req.params.id)
    res.redirect('/')
}


const handleViewUser = async (req:Request, res:Response) => {
    const user =await getUserById(parseInt(req.params.id))
    res.render('view-detail-user', {user:user})
}

const handleUpdateUser = async (req:Request, res:Response) => {
    const {name, email, address} = req.body
    const id = parseInt(req.params.id)
    await updateUserById(id, name, email, address)
    res.redirect('/')
}

export {getHomePage, getCreateUserPage, postCreateUser, handleDeleteUser, handleViewUser, handleUpdateUser}