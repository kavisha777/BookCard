import React from 'react';

const BookCard = ({ title, author, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', backgroundColor: 'pink', width: '250px' }}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
