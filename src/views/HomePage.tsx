import React, { useEffect, useState } from 'react';
import { fetchRandomPosters, resolvePosterImage, cleanHtml, getPosterTitle } from '../components/api/api';

export const HomePage: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  useEffect(()=> { fetchRandomPosters(4).then(setItems).catch(()=>{}); }, []);
  return (
    <div className="page home">
      <hr className="divider" />
      <div className="hero curtains" />
      <h2 className="section-title">Fire tilfældige...</h2>
      <div className="home-list">
        {items.map(p => (
          <div key={p.id} className="home-row">
            <img src={resolvePosterImage(p)} alt={getPosterTitle(p)} />
            <div className="home-info">
              <h3>{getPosterTitle(p)}</h3>
              <p>{cleanHtml(p.description || 'Lorem ipsum dolor sit amet...')}</p>
              <p>Genre: {p.genreName || p.genre?.name || p.genres?.[0]?.name || 'Ukendt genre'}</p>
              <div className="home-actions">
                <button className="btn secondary" onClick={() => window.location.hash = `#/plakat?id=${p.id}`}>Læs mere</button>
                <button className="btn icon-heart" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
