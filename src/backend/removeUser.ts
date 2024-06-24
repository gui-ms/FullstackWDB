'use server'

import UserRepository from "./UserRepository";

export default async function removeUser(id: string) {
    return UserRepository.remove(id)
}