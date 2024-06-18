import Duck from "./icons/Duck";

export default function Logo(){
    return (
        <div className="flex gap-2 items-center">
            <Duck className="fill-primary"/> 
            <p className="text-primary text-lg">QuackAcademy</p>
        </div>
    )
}

