import { Connection } from "mysql2";
import connection from "models/database"

const handleCreateUser = async (fullName: string, email: string, address: string) => {
    try {
        const sql = 'INSERT INTO `users`(`fullName`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [fullName, email, address];

        const [result, fields] = await (await connection).execute(sql, values);
        } catch (err) {
        console.log(err);
        }
}

const getAllUserAPI = async () => {
    try {
        const connect = await (await connection).query('SELECT * FROM users')
        return (connect[0])
    } catch (error) {
        return (error)
    }
}

const deleteUserById = async (id: number) => {
    try {
        const sql = 'DELETE FROM `users` WHERE id = ?';
    } catch (err) {
        console.log(err);
    }
}


export {handleCreateUser, getAllUserAPI, deleteUserById}