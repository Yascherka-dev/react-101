const fs = require('fs');
const path = require('path');

// Récupérer le nom du composant depuis les arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Erreur: Veuillez fournir un nom de composant');
  console.log('Usage: npm run component <NomComposant>');
  process.exit(1);
}

// Normaliser le nom du composant (première lettre en majuscule)
const normalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Chemins des fichiers
const componentDir = path.join(__dirname, '../src/component');
const componentFile = path.join(componentDir, `${normalizedName}.js`);
const cssFile = path.join(componentDir, `${normalizedName}.css`);

// Vérifier si le composant existe déjà
if (fs.existsSync(componentFile)) {
  console.error(`❌ Erreur: Le composant "${normalizedName}" existe déjà!`);
  process.exit(1);
}

// Créer le dossier component s'il n'existe pas
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// Template du composant JS
const componentTemplate = `import React from 'react';
import './${normalizedName}.css';

const ${normalizedName} = () => {
  return (
    <div className="${normalizedName.toLowerCase()}">
      <h2>${normalizedName}</h2>
    </div>
  );
};

export default ${normalizedName};
`;

// Template du fichier CSS
const cssTemplate = `.${normalizedName.toLowerCase()} {
  /* Styles pour ${normalizedName} */
}
`;

// Créer les fichiers
try {
  fs.writeFileSync(componentFile, componentTemplate);
  fs.writeFileSync(cssFile, cssTemplate);
  
  console.log(`✅ Composant "${normalizedName}" créé avec succès!`);
  console.log(`   📄 ${componentFile}`);
  console.log(`   🎨 ${cssFile}`);
  console.log(`\n💡 Pour l'utiliser, importez-le dans votre App.js:`);
  console.log(`   import ${normalizedName} from './component/${normalizedName}';`);
} catch (error) {
  console.error('❌ Erreur lors de la création du composant:', error.message);
  process.exit(1);
}

