// importazione file
import HeaderMenu from "./HeaderMenu";
import Logo from "../logo";

export default function Header() {
    const arrayLink =['characters','comics','movies','tv','games','collectibles','videos','fans','news','shop']
    return (
    <header id="intestazione" className="container">
        <a href="index.html"><Logo /></a>
        <HeaderMenu link = {arrayLink} />
    </header>
    )
}
