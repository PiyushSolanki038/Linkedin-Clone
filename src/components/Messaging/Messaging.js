import React, { useState } from 'react';
import './Messaging.css';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

function Messaging() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Thanks for connecting!",
      profilePic: "/images/profile1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Let's catch up soon",
      profilePic: "/images/profile2.jpg"
    }
  ];

  return (
    <div className="messaging">
      <div className="messaging__sidebar">
        <div className="messaging__header">
          <h2>Messaging</h2>
          <EditIcon />
        </div>
        <div className="messaging__search">
          <SearchIcon />
          <input type="text" placeholder="Search messages" />
        </div>
        <div className="chats__list">
          {chats.map(chat => (
            <div 
              key={chat.id} 
              className={`chat__item ${selectedChat?.id === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.profilePic} alt="" />
              <div className="chat__info">
                <h3>{chat.name}</h3>
                <p>{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="messaging__main">
        {selectedChat ? (
          <>
            <div className="chat__header">
              <img src={selectedChat.profilePic} alt="" />
              <h3>{selectedChat.name}</h3>
            </div>
            <div className="chat__messages">
              {/* Messages will be displayed here */}
            </div>
            <div className="chat__input">
              <input type="text" placeholder="Write a message..." />
              <button>Send</button>
            </div>
          </>
        ) : (
          <div className="no__chat__selected">
            <h3>Select a conversation</h3>
            <p>Choose from your existing conversations or start a new one</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messaging;