import { Request, Response } from "express"

const getDashboardPage = async (req: Request, res: Response) =>{

    return res.render("admin/dashboard/show.ejs")
}

const getAdminUserPage = async (req: Request, res: Response) =>{
    return res.render("admin/user/show.ejs")
}

const getAdminOrderPage = async (req: Request, res: Response) =>{
    return res.render("admin/order/show.ejs")
}

const getAdminProductPage = async (req: Request, res: Response) =>{
    return res.render("admin/product/show.ejs")
}

export {getDashboardPage, getAdminUserPage, getAdminOrderPage, getAdminProductPage}