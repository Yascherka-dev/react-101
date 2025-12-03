import React, { useState, useEffect } from 'react';
import './ConnexionTitre.css';
import Card from './Card';

const ConnexionTitre = ({ 
  onTitreChange, 
  titreOriginal
}) => {
  const [estConnecte, setEstConnecte] = useState(false);
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [nomSaisi, setNomSaisi] = useState('');

  useEffect(() => {
    if (estConnecte && nomUtilisateur) {
      onTitreChange(`Bienvenue ${nomUtilisateur} !`);
    } else {
      onTitreChange(titreOriginal);
    }

    return () => {
      onTitreChange(titreOriginal);
    };
  }, [estConnecte, nomUtilisateur, onTitreChange, titreOriginal]);

  const handleConnexion = (e) => {
    e.preventDefault();
    if (nomSaisi.trim()) {
      setNomUtilisateur(nomSaisi.trim());
      setEstConnecte(true);
      setNomSaisi('');
    }
  };

  const handleDeconnexion = () => {
    setEstConnecte(false);
    setNomUtilisateur('');
  };

  return (
    <Card>
      <div className="connexion-container">
        <h2 className="connexion-titre">Gestion de Connexion</h2>
        
        {estConnecte ? (
          <div className="connexion-connecte">
            <p className="message-bienvenue">
              Connecté en tant que <strong>{nomUtilisateur}</strong>
            </p>
            <button 
              className="btn-deconnexion" 
              onClick={handleDeconnexion}
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div className="connexion-formulaire">
            <form onSubmit={handleConnexion}>
              <div className="form-groupe">
                <label htmlFor="nom" className="form-label">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="nom"
                  className="form-input"
                  value={nomSaisi}
                  onChange={(e) => setNomSaisi(e.target.value)}
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              <button type="submit" className="btn-connexion">
                Se connecter
              </button>
            </form>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ConnexionTitre;

