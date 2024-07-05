import { useState } from 'react';
import DetailSearch from './DetailSearch';
import './ItemSearch.css';

const ItemSearch = ({ result }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container" onClick={handleContainerClick}>
        <img src={result.flags.svg} alt={result.flags.alt} className="flag" />
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
