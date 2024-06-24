'use server'

import { User } from "@/core/model/User";
import Id from "@/core/utils/id";
import UserRepository from "./UserRepository";

export default async function getAll() {
    return UserRepository.getAll()
}