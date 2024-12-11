import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LikeProvider } from '../Shared/contexts/LikeContext';
import Header from '../Shared/ui/Header';
import Footer from '../Shared/ui/Footer';
import BookListPage from '../Pages/BookListPage';
import BookDetailPage from '../Pages/BookDetailPage';
import LikedBooksPage from '../Pages/LikedBooksPage';

const App = () => {
  return (
    <LikeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<BookListPage />} />
              <Route path="/book/:id" element={<BookDetailPage />} />
              <Route path="/liked" element={<LikedBooksPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LikeProvider>
  );
};

export default App;