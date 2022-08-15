function Card(props) {
  const { title, description, image } = props;
  
  return (
    <article className="card">
      <img src={ image } alt={ title } />
      <h2 className="card-title">{ title }</h2>
      <p className="card-description">{ description }</p>
    </article>
  );
}

export default Card;
