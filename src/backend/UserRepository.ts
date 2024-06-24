import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
    private static client: PrismaClient = new PrismaClient()

    static async getAll(): Promise<User[]> {
        return await this.client.user.findMany()
    }

    static async getById(id: string): Promise<User> {
        const user = await this.client.user.findUnique({where:{ id}})
        return user as User
    }

    static async create(user: User): Promise<User> {
        return await this.client.user.upsert({
            where: {id: user.id},
            update: user,
            create: user
        })
    }

    static async remove(id: string): Promise<User> {
        return await this.client.user.delete({
            where: {id},
        })
    }

}