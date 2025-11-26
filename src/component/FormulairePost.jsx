import React, { useState } from 'react';
import './FormulairePost.css';
import Card from './Card';
import Button from './Button';

const FormulairePost = ({ onAddPost }) => {
  const [nom, setNom] = useState('');
  const [contenu, setContenu] = useState('');
  const [erreurs, setErreurs] = useState({});

  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = 'Le nom est requis';
    }

    if (!contenu.trim()) {
      nouvellesErreurs.contenu = 'Le contenu est requis';
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validerFormulaire()) {
      const initiale = nom.trim().charAt(0).toUpperCase();
      onAddPost({
        nom: nom.trim(),
        initiale: initiale,
        contenu: contenu.trim()
      });

  
      setNom('');
      setContenu('');
      setErreurs({});
    }
  };

  return (
    <Card>
      <form className="formulaire-post" onSubmit={handleSubmit}>
        <h2 className="formulaire-titre">Créer un nouveau post</h2>
        
        <div className="formulaire-groupe">
          <label htmlFor="nom" className="formulaire-label">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            className={`formulaire-input ${erreurs.nom ? 'input-erreur' : ''}`}
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
              if (erreurs.nom) {
                setErreurs({ ...erreurs, nom: '' });
              }
            }}
            placeholder="Votre nom"
          />
          {erreurs.nom && (
            <span className="message-erreur">{erreurs.nom}</span>
          )}
        </div>

        <div className="formulaire-groupe">
          <label htmlFor="contenu" className="formulaire-label">
            Contenu du post *
          </label>
          <textarea
            id="contenu"
            className={`formulaire-textarea ${erreurs.contenu ? 'input-erreur' : ''}`}
            value={contenu}
            onChange={(e) => {
              setContenu(e.target.value);
              if (erreurs.contenu) {
                setErreurs({ ...erreurs, contenu: '' });
              }
            }}
            placeholder="Quoi de neuf ?"
            rows="4"
          />
          {erreurs.contenu && (
            <span className="message-erreur">{erreurs.contenu}</span>
          )}
        </div>

        <div className="formulaire-actions">
          <Button variant="primary" type="submit">
            Publier
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FormulairePost;

