import React from 'react';
import './Modal.css';

const DetailSearch = ({ isOpen, onClose, result }) => {
  const languages = result.languages ? Object.values(result.languages).join(', ') : 'N/A';
  const currencies = result.currencies
    ? Object.keys(result.currencies).map((currencyCode) => {
        const currency = result.currencies[currencyCode];
        return `${currency.name} (${currency.symbol})`;
      })
    : 'N/A';

  // Dynamically assign classes based on isOpen prop
  const modalClassName = isOpen ? 'modal show' : 'modal';

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="image-container">
          {result.coatOfArms.svg && (
            <img src={result.coatOfArms.svg} alt={result.flags.alt} style={{ marginBottom: '10px' }} />
          )}
          <img src={result.flags.svg} alt={result.flags.alt} style={{ width: '100%', marginBottom: '10px' }} />
        </div>
        <div className="text-container">
          <h2>{result.name.official}</h2>
          <p><strong>Name:</strong> {result.name.common}</p>
          <p><strong>Region:</strong> {result.region}</p>
          <p><strong>Subregion:</strong> {result.subregion}</p>
          <p><strong>Capital:</strong> {result.capital && result.capital[0]}</p>
          <p><strong>Languages:</strong> {languages}</p>
          <p><strong>Currencies:</strong> {currencies}</p>
          <p><strong>Phone:</strong> {result.idd.root}{result.idd.suffixes}</p>
          <p><strong>Timezones:</strong> {result.timezones && result.timezones[0]}</p>
          <p><strong>Population:</strong> {result.population.toLocaleString()}</p>
          <p><strong>Location:</strong> <a href={result.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
        </div>
      </div>
    </div>
  );
};

export default DetailSearch;
