import React, { useState } from 'react';
import DetailSearch from './DetailSearch';
import './ItemSearch.css';

const ItemSearch = ({ result }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true); // Set imageLoaded state to true when image is loaded
  };

  return (
    <>
      <div className="container" onClick={handleContainerClick}>
        {result.flags.svg && ( // Check if result.flags.svg is defined
          <img
            src={result.flags.svg}
            alt={result.flags.alt}
            className="flag"
            onLoad={handleImageLoaded} // Update state when image is loaded
          />
        )}
        <div className="text-container">
          <span className="name">{result.name.common}</span>
          <span className="alt-spelling">{result.altSpellings[0]}</span>
        </div>
      </div>

      <DetailSearch isOpen={isModalOpen} onClose={handleCloseClick} result={result} />
    </>
  );
};

export default ItemSearch;
