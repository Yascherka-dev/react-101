import React from 'react';
import './Post.css';
import Card from './Card';
import Button from './Button';

const Post = ({ id, nom, initiale, contenu, likes, partages, onLike, onShare }) => {
  const handleLikeClick = () => {
    if (onLike) {
      onLike(id);
    }
  };

  const handleShareClick = () => {
    if (onShare) {
      onShare(id);
    }
  };

  return (
    <Card>
      <div className="post-header">
        <div className="avatar">{initiale}</div>
        <h3 className="post-author">{nom}</h3>
      </div>
      <div className="post-content">
        <p>{contenu}</p>
      </div>
      <div className="post-actions">
        <Button variant="like" icon="❤️" onClick={handleLikeClick}>
          {likes} {likes === 1 ? 'Like' : 'Likes'}
        </Button>
        <Button variant="share" icon="🔗" onClick={handleShareClick}>
          {partages} {partages === 1 ? 'Partage' : 'Partages'}
        </Button>
      </div>
    </Card>
  );
};

export default Post;

