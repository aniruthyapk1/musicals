import React from 'react';
import './Footer.css';


class Footer extends React.Component{
    render() {
        return (
            <div>
              <ul className="footer-nav">
              <li>Contatti</li> 
              <li>Help</li> 
              <li>Privacy</li> 
              </ul>
            </div>
        );
    }
}

export default Footer;