# 📱 Social Feed - Exercice React JSX

Projet d'apprentissage React basé sur le cours **React ESD Paris - Jour 1**.

## 📋 Description

Application React qui reproduit un fil d'actualité social (Social Feed) avec des posts utilisateurs. Ce projet illustre les concepts fondamentaux de React : **JSX**, **Props** et **Composants**.

## 🎯 Objectifs pédagogiques

- ✅ Comprendre la syntaxe JSX
- ✅ Utiliser les props pour passer des données entre composants
- ✅ Créer des composants réutilisables et modulaires
- ✅ Structurer une application React avec une architecture composants

## 🏗️ Architecture du projet

### Structure des composants

```
src/
├── App.js              # Composant principal
├── App.css             # Styles globaux
└── component/
    ├── Post.jsx        # Composant de post (utilise Card et Button)
    ├── Post.css
    ├── Card.jsx        # Composant conteneur réutilisable
    ├── Card.css
    ├── Button.jsx      # Composant bouton réutilisable
    └── Button.css
```

### Composants

#### 🎴 **Card** (`component/Card.jsx`)
Composant conteneur réutilisable qui gère le style de base des cartes (fond blanc, ombre, bordures arrondies).

**Props :**
- `children` : Contenu à afficher dans la carte

#### 🔘 **Button** (`component/Button.jsx`)
Composant bouton réutilisable avec différentes variantes.

**Props :**
- `variant` : Type de bouton (`like`, `share`, `primary`, `secondary`)
- `icon` : Emoji ou icône à afficher
- `children` : Texte du bouton
- `onClick` : Fonction de callback (optionnel)

**Exemple d'utilisation :**
```jsx
<Button variant="like" icon="❤️">
  5 Likes
</Button>
```

#### 📝 **Post** (`component/Post.jsx`)
Composant qui affiche un post utilisateur. Utilise les composants `Card` et `Button`.

**Props :**
- `nom` : Nom de l'utilisateur
- `initiale` : Initiale pour l'avatar
- `contenu` : Texte du post
- `likes` : Nombre de likes

**Exemple d'utilisation :**
```jsx
<Post
  nom="Marie"
  initiale="M"
  contenu="Premier café de la journée ☕"
  likes={2}
/>
```

## 🚀 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer l'application en mode développement**
```bash
npm start
```

L'application s'ouvrira automatiquement sur [http://localhost:3000](http://localhost:3000)

## 📜 Commandes disponibles

### Commandes de développement

```bash
# Démarrer le serveur de développement
npm start

# Lancer les tests
npm test

# Construire l'application pour la production
npm run build
```

### Génération de composants

Un script personnalisé permet de générer automatiquement de nouveaux composants :

```bash
# Créer un nouveau composant
npm run component NomDuComposant
```

Cette commande génère automatiquement :
- `src/component/NomDuComposant.jsx`
- `src/component/NomDuComposant.css`

## 🎨 Fonctionnalités

### Interface utilisateur

- **Header** : Titre "Social Feed" avec sous-titre
- **Fond dégradé** : Dégradé violet vers bleu
- **Posts** : Cartes blanches avec :
  - Avatar circulaire avec initiale
  - Nom de l'utilisateur
  - Contenu du post
  - Boutons d'action (Likes et Partages)

### Données des posts

L'application affiche actuellement 3 posts d'exemple :
- **Marie** : "Premier café de la journée ☕" (2 likes)
- **Thomas** : "Nouveau record personnel en salle de sport! 💪" (5 likes)
- **Sophie** : "Weekend approche... Des plans pour sortir? 🎉" (62 likes)

## 📚 Concepts React abordés

### JSX (JavaScript XML)
Syntaxe qui permet d'écrire du HTML-like dans JavaScript :
```jsx
const element = <h1>Bonjour React!</h1>;
```

### Props (Propriétés)
Mécanisme pour passer des données d'un composant parent à un composant enfant :
```jsx
<Post nom="Marie" likes={2} />
```

### Composants
Fonctions ou classes qui retournent du JSX pour créer des éléments réutilisables :
```jsx
const Button = ({ variant, children }) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};
```

### Composition de composants
Utiliser des composants à l'intérieur d'autres composants :
```jsx
<Card>
  <Post nom="Marie" />
</Card>
```

## 🛠️ Technologies utilisées

- **React** 19.2.0
- **React DOM** 19.2.0
- **React Scripts** 5.0.1 (Create React App)
- **CSS3** pour le styling

## 📖 Ressources

- [Documentation React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [JSX en profondeur](https://react.dev/learn/writing-markup-with-jsx)

## 🎓 Exercices suggérés

1. **Ajouter des événements** : Implémenter le clic sur les boutons pour incrémenter les likes
2. **Ajouter un formulaire** : Permettre de créer de nouveaux posts
3. **Gérer l'état** : Utiliser `useState` pour gérer dynamiquement les posts
4. **Ajouter des animations** : Animer l'apparition des posts
5. **Responsive design** : Adapter l'interface pour mobile

## 📝 Notes

- Les fichiers de composants utilisent l'extension `.jsx` pour mieux identifier le code JSX
- L'architecture modulaire permet une réutilisation facile des composants
- Les styles sont séparés par composant pour une meilleure organisation

## 👤 Auteur

Projet créé dans le cadre de la formation **React ESD Paris - Jour 1**.

---

**Bon code ! 🚀**
# react-101
