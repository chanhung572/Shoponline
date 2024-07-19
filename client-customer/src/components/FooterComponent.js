import React, {Component} from "react";

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
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;