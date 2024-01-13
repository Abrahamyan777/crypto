import "./footer.scss"
import img from '../../../images/monochrome-white 1.png'


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <div className="left-block">
                    <img src={img} alt="monochrome" />

                </div>
                <div className="center-block1">
                    <h5 className="text">123 Market St. #22B
                        Charlottesville, California 44635</h5>
                    <span className="info1">contact@exmpl.page</span>

                </div>
                <div className="center-block2">
                    <ul>
                        <li>About</li>
                        <li> Growers</li>
                        <li> Merchants</li>
                        <li> Partners</li>
                        <li>Contact</li>
                    </ul>

                </div>
                <div className="center-block3">
                    <ul>
                        <li>Facebook</li>
                        <li> Telegram</li>
                        <li> Watsapp</li>
                        <li> Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="invest">
                <span >© 2022 Invest Coin. All rights reserved.</span>
            </div>
       

        </footer>
    )
}

export default Footer;