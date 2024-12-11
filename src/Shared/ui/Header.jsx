import React from 'react';
import { Link } from 'react-router-dom';
import { useLikeContext } from '../contexts/LikeContext';

const Header = () => {
  const { likedBooks } = useLikeContext();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Books App</Link>
      </h1>
      <nav>
        <Link to="/liked" className="ml-4 text-white hover:underline">
          ❤️ Лайкнутые книги ({likedBooks.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;