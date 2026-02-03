import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../api/api';
import './Filters.scss';

export const Filters: React.FC<{ onSelect?: (id: string) => void }> = ({ onSelect }) => {
  const [genres, setGenres] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchGenres().then(g => {
      setGenres((g as any).items || g);
    }).catch(() => setError(true));
  }, []);

  return (
    <aside className="filters">
      <h3>Filtre</h3>
      <div className="filter-title">Genre</div>
      <ul className="genre-list">
        {error && <li>Kunne ikke hente genrer</li>}
        {!error && genres.map((g:any) => (
          <li key={g.id}>
            <button className="genre-link" onClick={() => onSelect && onSelect(g.id)}>{g.name}</button>
          </li>
        ))}
      </ul>
      <div className="filter-title">Favoritter</div>
    </aside>
  );
};
export default Filters;
