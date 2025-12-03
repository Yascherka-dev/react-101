import React, { useState } from 'react';
import './App.css';
import Post from './component/Post';
import FormulairePost from './component/FormulairePost';
import Chronometre from './component/Chronometre';
import ConnexionTitre from './component/ConnexionTitre';
import { Tabs, Tab } from './component/Tabs';

function App() {
  // ÉTAT pour gérer le titre du header
  const [titreHeader, setTitreHeader] = useState('React Exercices');

  const [posts, setPosts] = useState([
    {
      id: 1,
      nom: 'Marie',
      initiale: 'M',
      contenu: 'Premier café de la journée ☕ Qui d\'autre a besoin de caféine pour survivre?',
      likes: 2,
      partages: 0
    },
    {
      id: 2,
      nom: 'Thomas',
      initiale: 'T',
      contenu: 'Nouveau record personnel en salle de sport! 💪 On lâche rien!',
      likes: 5,
      partages: 0
    },
    {
      id: 3,
      nom: 'Sophie',
      initiale: 'S',
      contenu: 'Weekend approche... Des plans pour sortir? 🎉',
      likes: 62,
      partages: 0
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleShare = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, partages: post.partages + 1 }
        : post
    ));
  };

  const handleAddPost = (nouveauPost) => {
    const postAvecId = {
      ...nouveauPost,
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      likes: 0,
      partages: 0
    };
    setPosts([...posts, postAvecId]);
  };

  return (
    <div className="App">
      <header className="social-header">
        <h1 className="social-title">
          <span className="icon-phone">📱</span>
          {titreHeader}
        </h1>
        <p className="social-subtitle">Exercices JSX - Props, Events et Hooks</p>
      </header>
      <main className="social-feed">
        <Tabs>
          <Tab label="⏱️ Chronomètre">
            <Chronometre />
          </Tab>
          <Tab label="🔐 Effets Conditionnels">
            <ConnexionTitre 
              onTitreChange={setTitreHeader}
              titreOriginal="React Exercices"
            />
          </Tab>
          <Tab label="📱 Social Feed">
            <FormulairePost onAddPost={handleAddPost} />
            {posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                nom={post.nom}
                initiale={post.initiale}
                contenu={post.contenu}
                likes={post.likes}
                partages={post.partages}
                onLike={handleLike}
                onShare={handleShare}
              />
            ))}
          </Tab>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
