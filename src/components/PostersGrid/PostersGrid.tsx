import React from 'react';
import { resolvePosterImage, getPosterTitle } from '../api/api';
import './PostersGrid.scss';

export const PostersGrid: React.FC<{ posters: any[], onView: (id: string) => void, genreName?: string }> = ({ posters, onView, genreName }) => {
  const count = (posters || []).length;
  return (
    <section className="posters-grid">
      <div className="grid-header">
        <h2>{genreName || 'Alle genrer'} - {count} plakater</h2>
      </div>
      <div className="sort-wrap">
        <select className="sort-select" aria-label="Sorter efter">
          <option>Sorter efter</option>
          <option value="price-asc">Pris stigende</option>
          <option value="price-desc">Pris faldende</option>
        </select>
      </div>
      <div className="cards">
        {(posters || []).map(p => (
          <article key={p.id} className="card">
            <img src={resolvePosterImage(p)} alt={getPosterTitle(p)} />
            <div className="card-title">{getPosterTitle(p)}</div>
            <div className="card-price">Kr. {p.priceDKK ? p.priceDKK.toFixed(2) : '300,00'}</div>
            <div className="card-actions">
              <button className="btn primary">Læg i kurv</button>
              <button className="btn icon-heart" aria-label="Favorit" />
              <button className="btn secondary" onClick={() => onView(p.id)}>Læs mere</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default PostersGrid;
