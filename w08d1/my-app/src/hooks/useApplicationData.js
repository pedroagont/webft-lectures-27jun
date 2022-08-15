import { useState, useEffect } from 'react';

function useApplicationData() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
    
  useEffect(() => {
    setLoading(true)
    
    setTimeout(() => {
      const API_URL = `https://rickandmortyapi.com/api/character/?page=${selectedPage}`;
      fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
        setPages([...Array(data.info.pages)])
        setLoading(false)
      })
      .catch(err => console.error(err))
    }, 3000)
  }, [selectedPage])
    
  return { results, loading, pages, selectedPage, setSelectedPage }
}

export default useApplicationData;
