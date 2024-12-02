import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../Features/LikeButton';

const BookCard = ({ book, initialLiked, onLike }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
    onLike(book, !liked);
  };

  return (
    <div className="inline-block border p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className='flex justify-center'>
        <img
          src={book.image_url}
          alt={book.title}
          className="h-64 object-cover rounded mb-4"
        />
      </div>
      <h3 className="text-lg font-bold truncate">{book.title}</h3>
      <p className="text-sm text-gray-600 truncate">{book.authors}</p>
      <div className="mt-4 flex justify-between items-center">
        <Link to={`/book/${book.id}`} className="text-blue-500">Посмотреть</Link>
        <LikeButton liked={liked} onClick={handleLikeToggle} />
      </div>
    </div>
  );
};

export default BookCard;