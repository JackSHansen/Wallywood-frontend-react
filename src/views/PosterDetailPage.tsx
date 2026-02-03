import React, { useEffect, useState } from 'react';
import { fetchPosterById, resolvePosterImage, cleanHtml, getPosterTitle } from '../components/api/api';

export const PosterDetailPage: React.FC<{ id: string }> = ({ id }) => {
  const [p, setP] = useState<any | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchPosterById(id).then(data => setP(data)).catch(() => setError(true));
  }, [id]);

  if (error) return <div className="page detail">Kunne ikke hente plakat</div>;
  if (!p) return <div className="page detail">Indlæser…</div>;

  return (
    <div className="page detail">
      <div className="detail-left">
        <h2>{getPosterTitle(p)}</h2>
        <p>{cleanHtml(p.description || 'Ingen beskrivelse.')}</p>
        <p>Størrelse: {p.size || '62 x 85 cm'}</p>
        <p>Varenummer (SKU): {p.sku || '2104'}</p>
        <h3>Pris: {p.priceDKK ? `${p.priceDKK.toFixed(2)} DKK` : '300,00 DKK'}</h3>
        <div className="detail-actions">
          <button className="btn primary">Læg i kurv</button>
          <button className="btn icon-heart" />
        </div>
      </div>
      <div className="detail-right">
        <img src={resolvePosterImage(p)} alt={getPosterTitle(p)} />
      </div>
    </div>
  );
};
