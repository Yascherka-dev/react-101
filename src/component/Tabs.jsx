import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ children }) => {
  // État pour gérer l'onglet actif (commence à 0 = premier onglet)
  const [ongletActif, setOngletActif] = useState(0);

  // Convertir children en tableau pour pouvoir le parcourir
  // React.Children.toArray gère les cas où children est un seul élément ou plusieurs
  const onglets = React.Children.toArray(children);

  return (
    <div className="tabs-container">
      {/* En-tête des onglets - boutons cliquables */}
      <div className="tabs-header">
        {onglets.map((onglet, index) => {
          // Récupérer le label depuis les props du composant Tab
          const label = onglet.props.label || `Onglet ${index + 1}`;
          
          return (
            <button
              key={index}
              className={`tab-button ${ongletActif === index ? 'active' : ''}`}
              onClick={() => setOngletActif(index)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Contenu de l'onglet actif - affiche seulement l'onglet sélectionné */}
      <div className="tabs-content">
        {onglets[ongletActif]}
      </div>
    </div>
  );
};

// Composant pour définir le contenu d'un onglet
const Tab = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

export { Tabs, Tab };

