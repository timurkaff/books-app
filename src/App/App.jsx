import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from '../Shared/ui/Header';
import Footer from '../Shared/ui/Footer';
import BookListPage from '../Pages/BookListPage';
import BookDetailPage from '../Pages/BookDetailPage';
import LikedBooksPage from '../Pages/LikedBooksPage';

const App = () => {
  const [likedBooks, setLikedBooks] = useState([]);

  const handleLike = (book) => {
    if (!likedBooks.some((likedBook) => likedBook.id === book.id)) {
      setLikedBooks([...likedBooks, book]);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<BookListPage onLike={handleLike} />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/liked" element={<LikedBooksPage likedBooks={likedBooks} />} />
          </Routes>
        </main>
        <Footer likedBooks={likedBooks} />
      </div>
    </Router>
  );
};

export default App;
