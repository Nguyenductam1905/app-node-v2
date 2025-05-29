import { Request, Response } from "express"

const getHomePage = (req:Request, res:Response) => {
    res.render('home', {name: 'Tam', age: 21})
}

const getCreateUserPage = (req:Request, res:Response) => {
    res.render('create-user')
}

export {getHomePage, getCreateUserPage}