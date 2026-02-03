import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <hr className="divider" />
    <div className="footer-left">
      <strong>WALLYWOOD</strong><br/>Øster Uttrupvej 1<br/>9000 Aalborg
    </div>
    <div className="footer-mid">
      CVR: 12345678<br/>MAIL: info@wallywood.dk<br/>MOBIL: +45 9812 3456
    </div>
    <div className="footer-right">
      <span className="icon pinterest"></span>
      <span className="icon instagram"></span>
      <span className="icon facebook"></span>
      <span className="icon twitter"></span>
    </div>
  </footer>
);

export default Footer;
