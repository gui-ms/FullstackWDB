import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
    icon: ElementType
    text: string
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-blue-600">
            <props.icon />
            <span>{props.text}</span>
        </Link>
    )
}