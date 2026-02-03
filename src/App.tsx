import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './views/HomePage';
import { PostersPage } from './views/PostersPage';
import { PosterDetailPage } from './views/PosterDetailPage';
import { AboutPage } from './views/AboutPage';
import { ContactPage } from './views/ContactPage';
import { LoginPage } from './views/LoginPage';

const parseQuery = (hash: string) => {
  const q = new URLSearchParams(hash.split('?')[1] || '');
  const params: Record<string,string> = {};
  q.forEach((v,k)=> params[k]=v);
  return params;
};

export default function App() {
  const [hash, setHash] = useState(window.location.hash || '');

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const base = (hash.split('?')[0] || '') || '';
  const params = parseQuery(hash);

  let Content: JSX.Element;
  switch (base) {
    case '#/plakater': Content = <PostersPage />; break;
    case '#/plakat': Content = <PosterDetailPage id={params.id || ''} />; break;
    case '#/om-os': Content = <AboutPage />; break;
    case '#/kontakt-os': Content = <ContactPage />; break;
    case '#/login': Content = <LoginPage />; break;
    default: Content = <HomePage />;
  }

  return (
    <div className="shell">
      <Header />
      <main id="content">{Content}</main>
      <Footer />
    </div>
  );
}
