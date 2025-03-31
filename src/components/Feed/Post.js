import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({ post, onLike, onComment, onShare, currentUser }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    if (!isLiked) {
      onLike();
      setIsLiked(true);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <div className="post__header">
        <img src={post.author.profilePic} alt="" />
        <div className="post__info">
          <h2>{post.author.name}</h2>
          <p>{post.author.headline}</p>
          <span>{new Date(post.timestamp).toLocaleString()}</span>
        </div>
      </div>

      <div className="post__content">
        <p>{post.content}</p>
      </div>

      <div className="post__stats">
        <span>{post.likes} likes • {post.comments.length} comments • {post.shares || 0} shares</span>
      </div>

      <div className="post__buttons">
        <button 
          className={`post__button ${isLiked ? 'active' : ''}`} 
          onClick={handleLike}
        >
          <ThumbUpIcon />
          <span>Like</span>
        </button>
        <button 
          className="post__button"
          onClick={() => setShowComments(!showComments)}
        >
          <CommentIcon />
          <span>Comment</span>
        </button>
        <button 
          className="post__button"
          onClick={onShare}
        >
          <ShareIcon />
          <span>Share</span>
        </button>
        <button className="post__button">
          <SendIcon />
          <span>Send</span>
        </button>
      </div>

      {showComments && (
        <div className="post__comments">
          <form onSubmit={handleCommentSubmit}>
            <img src={currentUser.profilePic} alt="" />
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Post</button>
          </form>

          <div className="comments__list">
            {post.comments.map(comment => (
              <div key={comment.id} className="comment">
                <img src={comment.author.profilePic} alt="" />
                <div className="comment__content">
                  <h4>{comment.author.name}</h4>
                  <p>{comment.content}</p>
                  <span>{new Date(comment.timestamp).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;