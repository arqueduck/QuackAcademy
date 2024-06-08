import Link from "next/link";


export default function Header(){
    return (
        <header>
            <Link href="/"
            className="menu">
                Home
            </Link>
            <Link href="/introducao"
            className="menu">
                Começe <strong>aqui</strong>!
            </Link>
            <Link href="/html"
            className="menu">
                HTML
            </Link>
            <Link href="/css"
            className="menu">
                CSS
            </Link>
            <Link href="/javascript"
            className="menu">
               JavaScript
            </Link>
        </header>
    )
}