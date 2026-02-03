import React, { useEffect, useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import PostersGrid from '../components/PostersGrid/PostersGrid';
import { fetchPosters, fetchPosterById } from '../components/api/api';

export const PostersPage: React.FC = () => {
  const [posters, setPosters] = useState<any[]>([]);
  const [genreName, setGenreName] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const load = (genreId?: string) => {
    const urlGenre = genreId;
    fetchPosters(urlGenre).then((data:any) => {
      const items = data.items || data;
      setPosters(items);
    }).catch(()=> setError(true));
    if (genreId) {
      fetchPosterById(genreId).catch(()=>{}); // keep signature - optional
    }
  };

  useEffect(()=> { load(); }, []);

  return (
    <div className="page posters">
      <Filters onSelect={(id) => { load(id); }} />
      <div className="page-content">
        {error ? 'Kunne ikke hente plakater' :
          <PostersGrid posters={posters} onView={(id) => window.location.hash = `#/plakat?id=${id}`} genreName={genreName || 'Alle genrer'} />
        }
      </div>
    </div>
  );
};
