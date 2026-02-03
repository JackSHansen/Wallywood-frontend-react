import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  const navTo = (hash: string) => { window.location.hash = hash; };
  return (
    <header className="header">
      <div className="brand">WALLYWOOD</div>
      <nav>
        <button className="nav-link" onClick={() => navTo('')}>FORSIDE</button>
        <button className="nav-link" onClick={() => navTo('#/plakater')}>PLAKATER</button>
        <button className="nav-link" onClick={() => navTo('#/om-os')}>OM OS</button>
        <button className="nav-link" onClick={() => navTo('#/kontakt-os')}>KONTAKT OS</button>
        <button className="nav-link" onClick={() => navTo('#/login')}>LOGIN</button>
      </nav>
      <div className="cart" aria-label="Kurv" />
      <hr className="divider" />
    </header>
  );
};

export default Header;
