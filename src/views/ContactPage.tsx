import React from 'react';
export const ContactPage: React.FC = () => (
  <div className="page contact">
    <h2>Kontakt os</h2>
    <form className="form">
      <label>Dit navn: *<input type="text" required placeholder="Indtast dit navn" /></label>
      <label>Din email: *<input type="email" required placeholder="Indtast din email" /></label>
      <label>Din besked: *<textarea required placeholder="Indtast en besked"></textarea></label>
      <div className="form-actions">
        <button type="submit" className="btn primary">Send</button>
        <button type="button" className="btn secondary">Annuller</button>
      </div>
    </form>
  </div>
);
