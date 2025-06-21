import { PrismaClient } from "generated/prisma";
import { prisma } from "models/client";
import connection from "models/database";

const handleCreateUser = async (fullName: string, email: string, address: string) => {
    const prisma = new PrismaClient();
    const createUser = await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            address: address,
            
        },
    })
    return createUser
}
const getAllUserAPI = async () => {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany()
    return users
}

const deleteUserById = async (id: number) => {
    const prisma = new PrismaClient();
    const deleteUser = await prisma.user.delete({
        where: {
            id: id
        },
    })
    return deleteUser
}

const getUserById = async (id: number) => {
    const prisma = new PrismaClient();
    const result = await prisma.user.findUnique({
    where: {
        id: id,
    },
    });
      console.log(result);

    return result
}

const updateUserById = async (id: number, name: string, email: string, address: string) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.update({
        where: { id: id },
        data: { 
            name: name, 
            email: email, 
            address: address 
        },
    });
    console.log(user);
    return user
}


export { handleCreateUser, getAllUserAPI, deleteUserById, getUserById, updateUserById }