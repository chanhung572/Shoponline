import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
    render () {
        return (
            <div>
                <footer className="footer">
                    <div className="footer-col">
                        <h4>About us</h4>
                        <p>Company</p>
                        <p>Address</p>
                        <p>Privacy Policy</p>
                        <p>Terms and conditions</p>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
                        <p>FAQ </p>
                        <p>Return policy</p>
                        <p>Delivery policy</p>
                        <p>Commitment to quality</p>
                    </div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="icon-col">
                            <a
                                href = "https://www.facebook.com/nike"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </a>

                            <a style={{ color:"red" }}
                                href = "https://www.youtube.com/@nike"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>

                            <a style={{ color: "Maroon" }}
                                href = "https://www.instagram.com/nike"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;