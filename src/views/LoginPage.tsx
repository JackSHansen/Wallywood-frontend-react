import React from 'react';

export const LoginPage: React.FC = () => (
  <div className="page login">
    <h2>Login</h2>
    <form className="form">
      <label>Din email: *<input type="email" required placeholder="Indtast din email" /></label>
      <label>Din adgangskode: *<input type="password" required placeholder="Indtast din adgangskode" /></label>
      <div className="form-actions">
        <button type="submit" className="btn primary">Login</button>
        <button type="button" className="btn secondary">Annuller</button>
      </div>
      <div className="form-links">
        <a href="#">Glemt adgangskode?</a>
        <a href="#">Opret profil</a>
      </div>
    </form>
  </div>
);
