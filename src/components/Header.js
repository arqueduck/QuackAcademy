import Link from "next/link";
import House from "./icons/House";
import Duck from "./icons/Duck";
import Logo from "./Logo";


export default function Header(){
    return (
        <header
        className="
        flex gap-8 pl-4 pt-1
        items-center
        bg-neutral
        ">
            <Link href="/"
            className="btn btn-link no-underline text-neutral-content">
                <Logo/>
                {/* <House className="fill-"/> */}
            </Link>

            <Link href="/introducao"
            className="text-neutral-content font-bold">
                Comece aqui!
            </Link>
            <Link href="/html"
            className="text-neutral-content">
                HTML
            </Link>
            <Link href="/css"
            className="text-neutral-content">
                CSS
            </Link>
            <Link href="/javascript"
            className="text-neutral-content">
               JavaScript
            </Link>
        </header>
    )
}