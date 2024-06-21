import Link from "next/link";
import Logo from "./Logo";
import Menu from "./icons/Menu";


export default function Header({children}){
    return (

    <div className="drawer drawer-end h-screen overflow-hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

        <div className="drawer-content flex flex-col h-screen">
            {/* Navbar */}
            <div className="w-full navbar bg-neutral
            justify-between
            lg:justify-normal
            flex lg:gap-8 pl-4 pt-1
            ">                
                {/* Logo */}
                <Link href="/"
                className="btn btn-link no-underline text-neutral-content">
                    <Logo/>
                </Link>
                {/* Menu, hidden when large */}
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <Menu className="fill-primary"/>
                    </label>
                </div> 
                {/* Navbar options */}
                <div className="flex-none hidden lg:flex gap-8">
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
                </div>
                
            </div>
            {children}
        </div> 

        {/* Drawer */}

        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 

            <ul className="
            menu p-2 min-h-full bg-neutral
            flex flex-col gap-4
            text-lg
            ">
            {/* Sidebar content here */}
                <Link href="/"
                className="btn btn-link no-underline text-neutral-content">
                    <Logo/>
                    {/* <House className="fill-"/> */}
                </Link>
                <Link href="/introducao"
                className="text-neutral-content font-bold text-center">
                    Comece aqui!
                </Link>
                <Link href="/html"
                className="text-neutral-content text-center">
                    HTML
                </Link>
                <Link href="/css"
                className="text-neutral-content text-center">
                    CSS
                </Link>
                <Link href="/javascript"
                className="text-neutral-content text-center">
                JavaScript
                </Link>
            </ul>
        </div>
    </div>
    )
}