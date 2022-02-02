import React from 'react';
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <div className="row">
        <div className="col">
                <h4>Contact Me</h4>
                <ul className="list unstyled">
                    <li>Email: <a href="mailto: Brendenj7@hotmail.com">Brendenj7@hotmail.com</a></li>
                    <li>Phone: <a href="tel:+9514076422">951-407-6422</a></li>
                </ul>
                </div>
            <div className="col">
                <h4>My Links</h4>
                <ul className="list unstyled">
                    <li>GitHub: <a href="https://github.com/BVolt">https://github.com/BVolt</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/brenden-johnson-04b7a821b">My Profile</a></li>
                </ul>
            </div>
        </div>
    </div>
)


};

export default Footer;
