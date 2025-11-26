# 📱 Social Feed - Exercice React JSX

Projet d'apprentissage React dispensé par J. Omiscar. 

## 📋 Description

Application React qui reproduit un fil d'actualité social (Social Feed) avec des posts utilisateurs. Ce projet illustre les concepts fondamentaux de React : **JSX**, **Props**, **Composants**, **État (useState)**, **Événements** et **Validation de formulaires**.

## 🎯 Objectifs pédagogiques

-  Comprendre la syntaxe JSX
-  Utiliser les props pour passer des données entre composants
-  Créer des composants réutilisables et modulaires
-  Structurer une application React avec une architecture composants
-  Gérer l'état avec `useState`
-  Gérer les événements utilisateur (clics, soumission de formulaire)
-  Valider et gérer les erreurs dans les formulaires
-  Créer des formulaires contrôlés

## 🏗️ Architecture du projet

### Structure des composants

```
src/
├── App.js                    # Composant principal (gère l'état avec useState)
├── App.css                   # Styles globaux
└── component/
    ├── Post.jsx              # Composant de post (utilise Card et Button)
    ├── Post.css
    ├── FormulairePost.jsx    # Formulaire pour créer de nouveaux posts
    ├── FormulairePost.css
    ├── Card.jsx              # Composant conteneur réutilisable
    ├── Card.css
    ├── Button.jsx            # Composant bouton réutilisable
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
- `type` : Type de bouton HTML (`button`, `submit`, `reset`) - par défaut `button`

**Exemple d'utilisation :**
```jsx
<Button variant="like" icon="❤️" onClick={handleClick}>
  5 Likes
</Button>
```

#### 📝 **Post** (`component/Post.jsx`)
Composant qui affiche un post utilisateur. Utilise les composants `Card` et `Button`. Gère les interactions pour liker et partager.

**Props :**
- `id` : Identifiant unique du post
- `nom` : Nom de l'utilisateur
- `initiale` : Initiale pour l'avatar
- `contenu` : Texte du post
- `likes` : Nombre de likes
- `partages` : Nombre de partages
- `onLike` : Fonction appelée lors du clic sur le bouton Like
- `onShare` : Fonction appelée lors du clic sur le bouton Partager

**Exemple d'utilisation :**
```jsx
<Post
  id={1}
  nom="Marie"
  initiale="M"
  contenu="Premier café de la journée ☕"
  likes={2}
  partages={0}
  onLike={handleLike}
  onShare={handleShare}
/>
```

#### 📝 **FormulairePost** (`component/FormulairePost.jsx`)
Composant formulaire pour créer de nouveaux posts avec validation et gestion d'erreurs.

**Props :**
- `onAddPost` : Fonction appelée lors de la soumission du formulaire avec les données du nouveau post

**Fonctionnalités :**
- Validation des champs (nom et contenu requis)
- Messages d'erreur en temps réel
- Réinitialisation automatique après soumission réussie
- Génération automatique de l'initiale à partir du nom

**Exemple d'utilisation :**
```jsx
<FormulairePost onAddPost={handleAddPost} />
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
- **Formulaire de création** : Permet d'ajouter de nouveaux posts en haut de la page
- **Posts** : Cartes blanches avec :
  - Avatar circulaire avec initiale
  - Nom de l'utilisateur
  - Contenu du post
  - Boutons d'action interactifs (Likes et Partages)

### Fonctionnalités interactives

#### ❤️ **Gestion des Likes**
- Clic sur le bouton "Likes" incrémente le compteur
- Affichage dynamique du nombre de likes
- Gestion du pluriel ("1 Like" vs "2 Likes")

#### 🔗 **Gestion des Partages**
- Clic sur le bouton "Partages" incrémente le compteur
- Affichage dynamique du nombre de partages
- Gestion du pluriel ("1 Partage" vs "2 Partages")

#### ➕ **Ajout de nouveaux posts**
- Formulaire avec validation en temps réel
- Champs requis : Nom et Contenu
- Messages d'erreur si les champs sont vides
- Génération automatique de l'initiale
- Réinitialisation après soumission réussie

#### ✅ **Validation de formulaire**
- Vérification que tous les champs sont remplis
- Messages d'erreur contextuels
- Mise en évidence visuelle des champs invalides (bordure rouge)
- Effacement automatique des erreurs lors de la correction

### Données des posts

L'application démarre avec 3 posts d'exemple :
- **Marie** : "Premier café de la journée ☕" (2 likes, 0 partages)
- **Thomas** : "Nouveau record personnel en salle de sport! 💪" (5 likes, 0 partages)
- **Sophie** : "Weekend approche... Des plans pour sortir? 🎉" (62 likes, 0 partages)

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

### État avec useState
Hook React pour gérer l'état local d'un composant :
```jsx
const [posts, setPosts] = useState([
  { id: 1, nom: 'Marie', likes: 2 }
]);

// Mettre à jour l'état
setPosts([...posts, nouveauPost]);
```

### Événements
Gestion des interactions utilisateur (clics, soumission de formulaire) :
```jsx
<Button onClick={handleClick}>Cliquez-moi</Button>

<form onSubmit={handleSubmit}>
  <input onChange={(e) => setNom(e.target.value)} />
</form>
```

### Formulaires contrôlés
Formulaires dont les valeurs sont contrôlées par l'état React :
```jsx
const [nom, setNom] = useState('');

<input 
  value={nom} 
  onChange={(e) => setNom(e.target.value)} 
/>
```

### Validation de formulaire
Vérification des données avant soumission avec messages d'erreur :
```jsx
const validerFormulaire = () => {
  const erreurs = {};
  if (!nom.trim()) {
    erreurs.nom = 'Le nom est requis';
  }
  return Object.keys(erreurs).length === 0;
};
```

### Méthode .map()
Transformation d'un tableau en liste de composants React :
```jsx
{posts.map((post) => (
  <Post key={post.id} nom={post.nom} />
))}
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

### ✅ Exercices complétés

1. ✅ **Ajouter des événements** : Implémenter le clic sur les boutons pour incrémenter les likes et partages
2. ✅ **Ajouter un formulaire** : Permettre de créer de nouveaux posts avec validation
3. ✅ **Gérer l'état** : Utiliser `useState` pour gérer dynamiquement les posts, likes et partages
4. ✅ **Validation de formulaire** : Gérer les erreurs et afficher des messages d'erreur

### 🚀 Exercices à venir

1. **Ajouter des animations** : Animer l'apparition des posts et les transitions
2. **Responsive design** : Adapter l'interface pour mobile et tablette
3. **Suppression de posts** : Ajouter un bouton pour supprimer un post
4. **Édition de posts** : Permettre de modifier un post existant
5. **LocalStorage** : Sauvegarder les posts dans le navigateur
6. **Recherche/Filtrage** : Permettre de rechercher ou filtrer les posts
7. **Pagination** : Limiter l'affichage et ajouter une pagination

## 📝 Notes

- Les fichiers de composants utilisent l'extension `.jsx` pour mieux identifier le code JSX
- L'architecture modulaire permet une réutilisation facile des composants
- Les styles sont séparés par composant pour une meilleure organisation
- L'état est géré au niveau du composant `App` (lifting state up)
- Chaque post possède un `id` unique pour une meilleure gestion avec React
- Les formulaires utilisent des composants contrôlés pour une meilleure gestion de l'état

## 🔄 Flux de données

### Ajout d'un post
```
FormulairePost (saisie)
  ↓ onAddPost()
App.handleAddPost()
  ↓ setPosts()
État mis à jour
  ↓ React réaffiche
Nouveau post visible
```

### Incrémentation des likes/partages
```
Clic sur bouton
  ↓ onClick
Post.handleLikeClick()
  ↓ onLike(id)
App.handleLike(postId)
  ↓ setPosts() avec .map()
État mis à jour
  ↓ React réaffiche
Compteur mis à jour
```

## 👤 Auteur

Yasmina Cherkaoui.

---

**Bon code ! 🚀**
