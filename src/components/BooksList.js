import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import BookItem from './BookItem';

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };
  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} delBook={handleDelete} />
        ))}
      </ul>
    </>
  );
}

export default BooksList;
