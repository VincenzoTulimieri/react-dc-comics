export default function HeaderMenu(props) {
    return (
    <ul className="header-menu">
        <li><a href="#"><strong>{props.link[0]}</strong></a></li>
        <li><a href="#"><strong>{props.link[1]}</strong></a></li>
        <li><a href="#"><strong>{props.link[2]}</strong></a></li>
        <li><a href="#"><strong>{props.link[3]}</strong></a></li>
        <li><a href="#"><strong>{props.link[4]}</strong></a></li>
        <li><a href="#"><strong>{props.link[5]}</strong></a></li>
        <li><a href="#"><strong>{props.link[6]}</strong></a></li>
        <li><a href="#"><strong>{props.link[7]}</strong></a></li>
        <li><a href="#"><strong>{props.link[8]}</strong></a></li>
        <li><a href="#"><strong>{props.link[9]}</strong></a></li>
    </ul>
    )
}