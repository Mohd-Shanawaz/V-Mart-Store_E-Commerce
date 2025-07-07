import React, { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: 'Shanawaz Khan',
    email: 'shan@example.com',
    bio: 'Web developer passionate about React and UI/UX.',
    avatar: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
  };

  const avatarStyle = {
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    marginBottom: '1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#c2185b',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedUser({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editedUser });
    setIsEditing(false);
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={user.avatar} alt="User Avatar" style={avatarStyle} />
        {isEditing ? (
          <>
            <input
              style={inputStyle}
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              placeholder="Name"
            />
            <input
              style={inputStyle}
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              placeholder="Email"
            />
            <textarea
              style={{ ...inputStyle, height: '80px' }}
              value={editedUser.bio}
              onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
              placeholder="Bio"
            />
            <button style={buttonStyle} onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p style={{ color: '#555' }}>{user.email}</p>
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>{user.bio}</p>
            <button style={buttonStyle} onClick={handleEditToggle}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}
