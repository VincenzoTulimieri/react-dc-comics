// importazione file
import HeaderMenu from "./HeaderMenu";
import Logo from "./logo";

export default function Header() {
    return <header id="intestazione" className="container">
        <Logo />
        <HeaderMenu />
    </header>
}
