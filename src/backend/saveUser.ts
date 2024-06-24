'use server'

import { User } from "@/core/model/User";
import Id from "@/core/utils/id";
import UserRepository from "./UserRepository";

export default async function saveUser(user: Partial<User>) {
    const newUser = {
        ...user,
        id: user.id ?? Id.new
    }

    return UserRepository.create(newUser as User)
}