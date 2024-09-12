import React, { useState } from 'react';

const PlantItem = ({ plant, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(plant);
    setAdded(true);
  };

  return (
    <div className="plant-item">
      <img src={plant.image} alt={plant.name} className="image-size" />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={handleClick} disabled={added}>
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantItem;
