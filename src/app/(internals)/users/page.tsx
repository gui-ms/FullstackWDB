'use client'
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/users";
import Backend from "@/backend";
import { User } from "@/core/model/User";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";


export default function Users() {
  const [user, setUser] = useState<Partial<User>|null>(null)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    Backend.users.getAll().then(setUsers)
  },[])

  async function save(){
    if(!user) return
    await Backend.users.saveUser(user)
    const users = await Backend.users.getAll()
    setUsers(users)
    setUser(null)
  }

  async function remove(){
    if(!user || !user.id) return
    await Backend.users.removeUser(user.id)
    const users = await Backend.users.getAll()
    setUsers(users)
    setUser(null)
  }


  return (
    <Page className="flex flex-col gap-2">
        <Title image={IconUser} main="Usuários" secondary="Cadastro de Usuários"/>
        
        {user ? (
          <UserForm 
          user={user} 
          onChange={setUser} 
          onSave={save} 
          onCancel={()=>setUser(null)}
          onRemove={remove}/>
        ) 
      : (
        <>
        <div className="flex justify-end ">
          <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => setUser({})}>
            <IconPlus/>
            <span> Novo Usuário </span>
          </button>
        </div>
        <UserList users={users} onClick={setUser}/>
        </>
      )}
      
    </Page>
  )
}