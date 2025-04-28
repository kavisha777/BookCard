import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Book List</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {books.map((book, index) => (
          <BookCard 
            key={index}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
