import React, { useState } from 'react';
import './App.css';
import Post from './component/Post';
import FormulairePost from './component/FormulairePost';

function App() {
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
          Social Feed
        </h1>
        <p className="social-subtitle">Exercice JSX - Props et Events</p>
      </header>
      <main className="social-feed">
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
      </main>
    </div>
  );
}

export default App;
