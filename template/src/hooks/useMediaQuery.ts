import { useState, useEffect } from 'react';

const useMediaQuery = (media = 1102): number => {
  const [query, setQuery] = useState<number>(window.innerWidth);

  useEffect(() => {
    setQuery(window.innerWidth);

    const calcWidth = () => setQuery(window.innerWidth);

    window.addEventListener('resize', calcWidth);
    return () => window.removeEventListener('resize', calcWidth);
  }, []);

  return query >= media ? query : 0;
};

export default useMediaQuery;
