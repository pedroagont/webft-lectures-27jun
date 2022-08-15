import useApplicationData from '../hooks/useApplicationData';

import CardList from './CardList';
import './App.css';

function App() {
  const { results, loading, pages, selectedPage, setSelectedPage } = useApplicationData()
  
  return (
    <>
      <h1>Hello team! 👨🏻‍🏫🚀</h1>
      <CardList
        results={results}
        loading={loading}
        pages={pages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
}

export default App;
