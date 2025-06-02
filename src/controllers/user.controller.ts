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

const postCreateUser = (req:Request, res:Response) => {
    const {fullName, email, address} = req.body
    handleCreateUser(fullName, email, address)
    res.redirect('/')
}

const handleDeleteUser = async (req:Request, res:Response) => {
    await deleteUserById(parseInt(req.params.id))
    console.log(req.params.id)
    res.redirect('/')
}


const handleViewUser = async (req:Request, res:Response) => {
    const data =await getUserById(parseInt(req.params.id))
    const user = JSON.parse(JSON.stringify(data))
    res.render('view-detail-user', {user:user[0]})
}

const handleUpdateUser = async (req:Request, res:Response) => {
    const {fullName, email, address} = req.body
    const id = parseInt(req.params.id)
    await updateUserById(id, fullName, email, address)
    res.redirect('/')
}

export {getHomePage, getCreateUserPage, postCreateUser, handleDeleteUser, handleViewUser, handleUpdateUser}