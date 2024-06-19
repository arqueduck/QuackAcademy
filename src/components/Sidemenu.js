export default function Sidemenu({className, children}){
    return (
        <ul className={`hidden h-full bg-base-200 menu lg:block ${className}`}>
            {children}
        </ul>
    )
}