import { useState } from 'react';

import './product-card.styles.scss';
import placeholderImage from '../../assets/images/image-missing-placeholder.png';

const ProductCard = ({ product}) => {
  const { title, year, poster, genre, type } = product;
  
  const [imageSrc, setImageSrc] = useState(poster);

  const onError = (e) => {
    setImageSrc(placeholderImage);
    e.target.onerror = null;
  }

  return (
    <div className='product-card-container'>
      <div className="product-image">
        <img src={imageSrc} alt={`${title}`} onError={onError} />
      </div>
      <div className='product-card-footer'>
        <div className='product-card-title'>{title} ({year})</div>
        <div className="product-genres">Genres: {genre.join(", ")}</div>
      </div>
    </div>
  );
};

export default ProductCard;
