import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer__top">
        <ul>
          <h3>Contact</h3>
          <li>
          iEDC, NSS College Of Engineering,
          </li>
          <li>Palakkad, Kerala,</li>
          <li>India, 678008</li>
          <li>E-Mail: contact@zstream.in</li>
          <li>Tel: +919446033872</li>
        </ul>

        <ul>
          <h3>Quick Menu</h3>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="#">Company</Link>
          </li>
          <li>
            <Link to="#">
              Careers
            </Link>
          </li>
          <li><Link to="#">
              Contact
            </Link></li>
        </ul>

        <ul>
          <h3>Socials</h3>
          <li>
          <a href="https://www.facebook.com/zstreamofficial" target="_blank">Facebook</a>
          </li>
          <li>
          <a href="https://www.instagram.com/zstreamofficial/" target="_blank">Instagram</a>
          </li>
          <li>
          <a href="https://www.twitter.com/" target="_blank">Twitter</a>
          </li>
          <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
        </ul>
      </div>
      <div className="footer__bottom">
        <a href="/" className="brand">ZSTREAM</a>
        <span>© 2020 ZStream | All rights reserved</span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;