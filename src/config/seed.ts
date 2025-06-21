
import { prisma } from "src/config/client";

const initdatabase = async () => {
    const countUser = await prisma.user.count()
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "horashi@gmail.com",
                    password: "123456",
                    accountType: "SYSTEM",
                    address: "123 Main St",
                    fullName: "Horashi Dev",
                    phone: "1234567890",
                    avatar: "https://example.com/avatar1.png"
                },
                {
                    username: "admin@gmail.com",
                    password: "123456",
                    accountType: "SYSTEM",
                    address: "456 Admin Ave",
                    fullName: "Admin User",
                    phone: "0987654321",
                    avatar: "https://example.com/avatar2.png"
                }
            ]
        })
    }
    console.log(">>> ALREADY INIT DATA ...")
}
export default initdatabase