import Link from "next/link";


export default function Header(){
    return (
        <header
        className="
        flex justify-around
        bg-base-300
        ">
            <Link href="/"
            className="btn btn-primary text-neutral-content">
                Home
            </Link>
            <Link href="/introducao"
            className="btn btn-primary text-neutral-content">
                Começe <strong>aqui</strong>!
            </Link>
            <Link href="/html"
            className="btn btn-primary text-neutral-content">
                HTML
            </Link>
            <Link href="/css"
            className="btn btn-primary text-neutral-content">
                CSS
            </Link>
            <Link href="/javascript"
            className="btn btn-primary text-neutral-content">
               JavaScript
            </Link>
        </header>
    )
}