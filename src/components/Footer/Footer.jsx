// importazione componenti
import Button from "./Button";
import Social from "./Social";

export default function Footer(props) {
    return (
        <footer>
            <div className=" footer-container">
                <div className="container footer-container-ul">
                    <div>
                        <h3>dc comics</h3>
                        <ul className="footer-ul">
                            <li><a href="#">{props.link[0]}</a></li>
                            <li><a href="#">{props.link[1]}</a></li>
                            <li><a href="#">{props.link[2]}</a></li>
                            <li><a href="#">{props.link[3]}</a></li>
                            <li><a href="#">{props.link[4]}</a></li>
                            <li><a href="#">{props.link[5]}</a></li>
                            <li><a href="#">{props.link[6]}</a></li>
                        </ul>
                        <h3>shop</h3>
                        <ul className="footer-ul">
                            <li><a href="#">{props.link[7]}</a></li>
                            <li><a href="#">{props.link[8]}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>dc</h3>
                        <ul className="footer-ul">
                            <li><a href="#">{props.link[9]}</a></li>
                            <li><a href="#">{props.link[10]}</a></li>
                            <li><a href="#">{props.link[11]}</a></li>
                            <li><a href="#">{props.link[12]}</a></li>
                            <li><a href="#">{props.link[13]}</a></li>
                            <li><a href="#">{props.link[14]}</a></li>
                            <li><a href="#">{props.link[15]}</a></li>
                            <li><a href="#">{props.link[16]}</a></li>
                            <li><a href="#">{props.link[17]}</a></li>
                            <li><a href="#">{props.link[18]}</a></li>
                            <li><a href="#">{props.link[19]}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>dc comics</h3>
                        <ul className="footer-ul">
                            <li><a href="#">{props.link[20]}</a></li>
                            <li><a href="#">{props.link[21]}</a></li>
                            <li><a href="#">{props.link[22]}</a></li>
                            <li><a href="#">{props.link[23]}</a></li>
                            <li><a href="#">{props.link[24]}</a></li>
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