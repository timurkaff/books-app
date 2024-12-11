import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLikeContext } from '../../Shared/contexts/LikeContext'; 
import BookCard from '../../Entities/Book/BookCard';
import Container from '../../Shared/ui/Container';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const { likedBooks, toggleLike } = useLikeContext();

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            initialLiked={likedBooks.some(likedBook => likedBook.id === book.id)}
            onLike={(book, liked) => toggleLike(book, liked)} 
          />
        ))}
      </div>
    </Container>
  );
};

export default BookListPage;