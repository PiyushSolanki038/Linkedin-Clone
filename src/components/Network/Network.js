import React from 'react';
import './Network.css';

function Network() {
  const connections = [
    {
      id: 1,
      name: "John Doe",
      headline: "Software Engineer",
      profilePic: "/images/profile1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      headline: "Product Manager",
      profilePic: "/images/profile2.jpg"
    }
  ];

  return (
    <div className="network">
      <div className="network__manage">
        <h2>Manage my network</h2>
        <div className="network__stats">
          <div className="stat__item">
            <span>Connections</span>
            <span>500+</span>
          </div>
          <div className="stat__item">
            <span>Following</span>
            <span>120</span>
          </div>
        </div>
      </div>

      <div className="network__suggestions">
        <h2>People you may know</h2>
        <div className="connection__grid">
          {connections.map(connection => (
            <div key={connection.id} className="connection__card">
              <img src={connection.profilePic} alt="" />
              <h3>{connection.name}</h3>
              <p>{connection.headline}</p>
              <button>Connect</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Network;