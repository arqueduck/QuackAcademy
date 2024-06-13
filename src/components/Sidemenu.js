export default function Sidemenu({className, children}){
    return (
        <ul className={`h-full bg-base-200 menu ${className}`}>
            {children}
        </ul>
    )
}