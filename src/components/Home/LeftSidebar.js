import React from 'react';
import { Link } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';

function LeftSidebar({ user }) {
  return (
    <div className="leftSidebar">
      <div className="profile__card">
        <div className="profile__background"></div>
        <div className="profile__info">
          <Link to="/profile">
            <img src={user.profilePic} alt="" />
            <h2>{user.name}</h2>
          </Link>
          <p>{user.headline}</p>
        </div>
        
        <div className="profile__stats">
          <div className="stat__item">
            <span>Profile viewers</span>
            <span className="stat__number">47</span>
          </div>
          <div className="stat__item">
            <span>Post impressions</span>
            <span className="stat__number">164</span>
          </div>
        </div>

        <div className="premium__section">
          <p>Access exclusive tools & insights</p>
          <Link to="/premium" className="premium__link">
            Try Premium for free
          </Link>
        </div>

        <div className="bookmark__section">
          <BookmarkIcon />
          <span>My items</span>
        </div>
      </div>

      <div className="communities__card">
        <h3>Recent</h3>
        <div className="community__item">
          <GroupIcon />
          <span>React Developers</span>
        </div>
        <div className="community__item">
          <GroupIcon />
          <span>JavaScript Enthusiasts</span>
        </div>
        <Link to="/groups" className="groups__link">
          Groups
        </Link>
        <Link to="/events" className="events__link">
          Events
        </Link>
        <Link to="/hashtags" className="hashtags__link">
          Followed Hashtags
        </Link>
        <div className="discover__more">
          <h3>Discover more</h3>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;