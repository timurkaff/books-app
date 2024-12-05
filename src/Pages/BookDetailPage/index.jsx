import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookDetails from '../../Entities/Book/BookDetails';
import Container from '../../Shared/ui/Container';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://example-data.draftbit.com/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error('Error fetching book:', error));
  }, [id]);

  return (
    <Container>
      {book ? <BookDetails book={book} /> : <p>Loading...</p>}
    </Container>
  );
};

export default BookDetailPage;
