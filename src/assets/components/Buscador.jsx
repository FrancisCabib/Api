import React, { useState } from 'react';
import './Buscador.css';

function Buscador({ digimons }) {
  const [filtro, setFiltro] = useState('');
  const [nivelFiltro, setNivelFiltro] = useState('');

  const niveles = ['Fresh', 'In Training', 'Rookie', 'Champion', 'Ultimate', 'Mega', 'Armor'];
  const digimonsFiltrados = digimons.filter(digimon =>
    digimon.name.toLowerCase().includes(filtro.toLowerCase()) &&
    (nivelFiltro === '' || digimon.level === nivelFiltro)
  );

  return (
    <div className="buscador-container">
      <div className="search-controls">
        <h1 className="search-title">Buscar Digimon</h1>
        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Buscar Digimon"
          className="search-input"
        />
        <select
          value={nivelFiltro}
          onChange={(e) => setNivelFiltro(e.target.value)}
          className="level-filter"
        >
          <option value="">Seleccionar Nivel</option>
          {niveles.map(nivel => (
            <option key={nivel} value={nivel}>{nivel}</option>
          ))}
        </select>
      </div>
      <div className="cards-container">
        {digimonsFiltrados.length > 0 ? (
          digimonsFiltrados.map(digimon => (
            <div key={digimon.name} className="card">
              <img src={digimon.img} alt={digimon.name} />
              <div className="card-info">
                <h5 className="card-title">{digimon.name}</h5>
                <p className="card-level">Nivel: {digimon.level}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron Digimon con ese criterio de búsqueda.</p>
        )}
      </div>
    </div>
  );
}

export default Buscador;
