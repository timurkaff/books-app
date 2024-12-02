import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../../Entities/Book/BookCard';
import Container from '../../Shared/ui/Container';

const BookListPage = ({ onLike }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onLike={onLike} />
        ))}
      </div>
    </Container>
  );
};

export default BookListPage;
