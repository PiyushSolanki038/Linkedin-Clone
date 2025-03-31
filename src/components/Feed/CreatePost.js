import React, { useState } from 'react';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

function CreatePost({ onPost, user }) {
  const [postContent, setPostContent] = useState('');
  const [mediaType, setMediaType] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);
  const [showMediaInput, setShowMediaInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim() || mediaFile) {
      onPost({
        content: postContent,
        mediaType,
        mediaFile
      });
      setPostContent('');
      setMediaFile(null);
      setMediaType(null);
      setShowMediaInput(false);
    }
  };

  const handleMediaClick = (type) => {
    setMediaType(type);
    setShowMediaInput(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="create-post">
      <div className="create-post__input">
        <img src={user.profilePic} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Start a post"
          />
          <button type="submit">Post</button>
        </form>
      </div>

      {showMediaInput && (
        <div className="media-input">
          <input
            type="file"
            accept={
              mediaType === 'photo' ? 'image/*' :
              mediaType === 'video' ? 'video/*' :
              mediaType === 'event' ? '.ics,.pdf' :
              '.doc,.docx,.pdf'
            }
            onChange={handleFileChange}
          />
          {mediaFile && (
            <div className="media-preview">
              {mediaType === 'photo' && <img src={mediaFile} alt="Preview" />}
              {mediaType === 'video' && <video src={mediaFile} controls />}
              {(mediaType === 'event' || mediaType === 'article') && (
                <p>File selected: {mediaFile.substring(0, 30)}...</p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="create-post__options">
        <div className="option" onClick={() => handleMediaClick('photo')}>
          <PhotoIcon style={{ color: '#70b5f9' }} />
          <span>Photo</span>
        </div>
        <div className="option" onClick={() => handleMediaClick('video')}>
          <VideoLibraryIcon style={{ color: '#7fc15e' }} />
          <span>Video</span>
        </div>
        <div className="option" onClick={() => handleMediaClick('event')}>
          <EventIcon style={{ color: '#e7a33e' }} />
          <span>Event</span>
        </div>
        <div className="option" onClick={() => handleMediaClick('article')}>
          <ArticleIcon style={{ color: '#fc9295' }} />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;