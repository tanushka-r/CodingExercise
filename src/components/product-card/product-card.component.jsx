import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { title, year, poster, genre, type } = product;
  return (
    <div className='product-card-container'>
      <div className="product-image">
        <img src={poster} alt={`${title}`} />
      </div>
      <div className='product-card-footer'>
        <div className='product-card-title'>{title} ({year})</div>
        {/* <div className="product-genres">Genres: {genre.split(" ")}</div> */}
      </div>
    </div>
  );
};

export default ProductCard;
