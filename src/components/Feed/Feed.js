import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Post from './Post';
import CreatePost from './CreatePost';
import './Feed.css';

function Feed() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Shubhra Gupta",
        headline: "Software Developer",
        profilePic: "/images/Screenshot 2025-04-01 004221.png"
      },
      content: "Excited to share my first post!",
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      shares: 0
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, {
            id: Date.now(),
            author: user,
            content: comment,
            timestamp: new Date().toISOString()
          }]
        };
      }
      return post;
    }));
  };

  const handleShare = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, shares: (post.shares || 0) + 1 };
      }
      return post;
    }));
    alert("Post shared successfully!");
  };

  const handleNewPost = (content) => {
    const newPost = {
      id: Date.now(),
      author: user,
      content,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      shares: 0
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <div className="feed__container">
        <CreatePost onPost={handleNewPost} user={user} />
        <div className="posts">
          {posts.map(post => (
            <Post 
              key={post.id} 
              post={post}
              onLike={() => handleLike(post.id)}
              onComment={comment => handleComment(post.id, comment)}
              onShare={() => handleShare(post.id)}
              currentUser={user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;