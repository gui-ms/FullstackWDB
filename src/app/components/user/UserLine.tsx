import { User } from "@/core/model/User"

export interface UserLineProps {
    user:User
    onClick?: (user: User) => void
}

export default function UserLine(props: UserLineProps) {
    return (
        <div className="flex bg-zinc-900 p-4 cursor-pointer"
        onClick={() => props.onClick?.(props.user)}>
            <div className="flex flex-col">
                <span>{props.user.name}</span>
                <span className="text-sm text-zinc-400">{props.user.email}</span>
            </div>
        </div>
    )

}