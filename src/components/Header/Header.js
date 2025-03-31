import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';

function Header() {
  const { user } = useAuth();

  return (
    <div className="header">
      <div className="header__left">
        <img src="/images/Screenshot 2025-04-01 003358.png" alt="LinkedIn" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <Link to="/" className="header__option">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/network" className="header__option">
          <PeopleIcon />
          <span>Network</span>
        </Link>
        <Link to="/jobs" className="header__option">
          <WorkIcon />
          <span>Jobs</span>
        </Link>
        <Link to="/messaging" className="header__option">
          <MessageIcon />
          <span>Messaging</span>
        </Link>
        <Link to="/profile" className="header__option">
          <PersonIcon />
          <span>Me</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;