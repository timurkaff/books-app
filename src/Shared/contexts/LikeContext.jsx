import React, { createContext, useState, useContext } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedBooks, setLikedBooks] = useState([]);

  const toggleLike = (book, liked) => {
    if (liked) {
      if (!likedBooks.some((likedBook) => likedBook.id === book.id)) {
        setLikedBooks([...likedBooks, book]);
      }
    } else {
      setLikedBooks(likedBooks.filter((likedBook) => likedBook.id !== book.id));
    }
  };

  return (
    <LikeContext.Provider value={{ likedBooks, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = () => useContext(LikeContext);