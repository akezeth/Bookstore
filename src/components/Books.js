import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksList from './BooksList';
import InputBook from './InputBook';

function Books() {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ]);
  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };
  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };
  return (
    <>
      <BooksList books={books} delBook={delBook} />
      <InputBook addBook={addBook} />
    </>
  );
}

export default Books;
