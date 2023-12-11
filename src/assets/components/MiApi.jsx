import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

function MiApi() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(response => response.json())
      .then(data => setDigimons(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return <Buscador digimons={digimons} />;
}

export default MiApi;
