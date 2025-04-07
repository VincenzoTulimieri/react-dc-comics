// importazione file
import HeaderMenu from "./HeaderMenu";
import Logo from "../logo";

export default function Header(props) {
    return (
        <header id="intestazione" className="container">
            <a href="index.html"><Logo /></a>
            <HeaderMenu link={props.link} />
        </header>
    )
}
