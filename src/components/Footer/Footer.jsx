export default function Footer() {
    return (
    <footer>
        <div className="container footer-flex">
            <div>
                <h3>dc comics</h3>
                <ul className="footer-ul">
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>
                </ul>
                <h3>shop</h3>
                <ul className="footer-ul">
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
            </div>
            <div className="container-img">
                <img src="../public/img/dc-logo-bg.png" alt="" />
            </div>
        </div>
        <div className="footer-end">
            <div className="container">
                <div className="btn">

                </div>
                <div className="social">

                </div>
            </div>
        </div>
    </footer>
    )
}