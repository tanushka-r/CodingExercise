import { useState } from 'react';

import placeholderImage from '../../assets/images/image-missing-placeholder.png';
import './product-card.styles.scss';

const ProductCard = ({ product}) => {
  const { title, year, poster, genre } = product;
  const [imageSrc, setImageSrc] = useState(poster);

  const onError = (e) => {
    setImageSrc(placeholderImage);
    e.target.onerror = null;
  }

  return (
    <div className='product-card-container'>
      <div className="product-image">
        <img src={imageSrc} alt={title} onError={onError} />
      </div>
      <div className='product-card-footer'>
        <h3 className='product-title'>{title} ({year})</h3>
        <p className="product-genre">Genres: {genre.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProductCard;
