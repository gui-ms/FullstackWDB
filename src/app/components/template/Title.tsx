import { ElementType } from "react";

export interface TitleProps  {
    main: string,
    secondary: string,
    image: ElementType
}

export default function Title(props: TitleProps){
    return (
        <div className="flex gap-2">
            <props.image size={50}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.main}</h1>
                <h2 className="text-zinc-400">{props.secondary}</h2>
            </div>
        </div>
    )
}