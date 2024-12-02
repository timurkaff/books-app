import React from 'react';
import BookCard from '../../Entities/Book/BookCard';
import Container from '../../Shared/ui/Container';

const LikedBooksPage = ({ likedBooks, onLikeToggle }) => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6 mt-8">Лайкнутые книги</h1>
      {likedBooks.length === 0 ? (
        <p className="text-gray-500">Тебе еще ни одна книга не понравилась.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedBooks.map((book) => (
            <BookCard key={book.id} book={book} initialLiked={true} onLike={(book, liked) => onLikeToggle(book, liked)} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default LikedBooksPage;