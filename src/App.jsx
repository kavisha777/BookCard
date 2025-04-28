import React from 'react';
import BookList from '../src/components/BookList';

function App() {
  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel set in the American South during the 1930s.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian regime.'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel depicting the Jazz Age and the American Dream.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0a0a23', minHeight: '100vh', color: 'white', padding: '2rem' }}>
      <BookList books={books} />
    </div>
  );
}

export default App;
