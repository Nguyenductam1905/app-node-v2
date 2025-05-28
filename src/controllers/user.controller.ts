import { Request, Response } from "express"

const getHomePage = (req:Request, res:Response) => {
    res.render('home', {name: 'Tam', age: 21})
}

export {getHomePage}