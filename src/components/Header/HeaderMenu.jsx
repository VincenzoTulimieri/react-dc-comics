export default function HeaderMenu(props) {
    const links = props.link
    return (
    <ul className="header-menu">
        {links.map((link,index)=>(
            <li key={index}><a href="#"><strong>{link}</strong></a></li>
        ))}
    </ul>
    )
}