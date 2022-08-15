import Card from './Card';

function CardList(props) {
  const { results, loading, pages, selectedPage, setSelectedPage } = props;
  
  if (loading) {
    return (
      <section className="cards-section">
        <h3 className="section-title">Loading characters from page {selectedPage}...</h3>
        <img src="https://i.gifer.com/origin/d1/d163e82154d44c2a3fd06f72dde8f252_w200.gif" alt="loading gif" className="loading-gif"/>
      </section>
    );
  }
  
  return (
    <section className="cards-section">
      <h3 className="section-title">Displaying characters from page {selectedPage}</h3>
      <div className="cards-results">
        {results.map(char =>
            <Card
              key={char.id}
              title={char.name}
              description={char.species}
              image={char.image}/>
        )}
      </div>
      <ul className="cards-pagination">
        {pages && pages.map((_, i) => (
          <li
            key={i+1}
            onClick={() => setSelectedPage(i+1)}
            className={`pagination-item ${selectedPage === i+1 ? 'pagination-item-selected' : ''}`}
          >{i+1}</li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
