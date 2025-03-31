import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import './Home.css';

function Home({ user }) {
  return (
    <div className="home">
      <LeftSidebar user={user} />
      <Feed user={user} />
      <RightSidebar />
    </div>
  );
}

export default Home;