// importazione file
import HeaderMenu from "./HeaderMenu";
import Logo from "../logo";

export default function Header() {
    const arrayLink =['characters','comics','movies','tv','games','collectibles','videos','fans','news','shop']
    return (
    <header id="intestazione" className="container">
        <Logo />
        <HeaderMenu  link = {arrayLink} />
    </header>
    )
}
