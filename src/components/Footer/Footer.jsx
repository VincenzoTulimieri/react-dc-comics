// importazione componenti
import Button from "./Button";
import Social from "./Social";

export default function Footer(props) {
    const linkDccomics = props.linkDccomics
    const linkShop = props.linkShop
    const linkDc = props.linkDc
    const linkSite = props.linkSite
    return (
        <footer>
            <div className=" footer-container">
                <div className="container footer-container-ul">
                    <div>
                        <h3>dc comics</h3>
                        <ul className="footer-ul">
                            {linkDccomics.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                        <h3>shop</h3>
                        <ul className="footer-ul">
                            {linkShop.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>dc</h3>
                        <ul className="footer-ul">
                            {linkDc.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>dc comics</h3>
                        <ul className="footer-ul">
                            {linkSite.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="container-img">
                        <img src="../img/dc-logo-bg.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="footer-end">
                <div className="container footer-end-flex">
                    <Button />
                    <Social />
                </div>
            </div>
        </footer>
    )
}