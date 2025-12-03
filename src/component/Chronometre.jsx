
import React, { useState, useEffect } from 'react';
import './Chronometre.css';

const Chronometre = () => {
  const [temps, setTemps] = useState(0);

  useEffect(() => {
   
    const intervalle = setInterval(() => {
      setTemps((tempsPrecedent) => tempsPrecedent + 1);
    }, 1000); 

    return () => {
    
      clearInterval(intervalle);
    };
   
  }, []); 

  // Fonction pour formater le temps en HH:MM:SS
  const formaterTemps = (secondes) => {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const secs = secondes % 60;

    return `${String(heures).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="chronometre">
      <h3 className="chronometre-titre">⏱️ Chronomètre</h3>
      <div className="chronometre-affichage">
        {formaterTemps(temps)}
      </div>
    </div>
  );
};

export default Chronometre;

