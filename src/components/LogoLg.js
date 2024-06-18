import Duck from "./icons/Duck";

export default function LogoLg(){
    return (
        <div className="flex gap-2 items-center">
            <Duck className="fill-primary" size={1.5}/> 
            <p className="text-primary text-4xl">QuackAcademy</p>
        </div>
    )
}

