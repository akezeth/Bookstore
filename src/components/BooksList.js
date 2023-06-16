import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList({ books, delBook }) {
  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} delBook={delBook} />
        ))}
      </ul>
    </>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

BooksList.propTypes = {
  delBook: PropTypes.func.isRequired,
};

export default BooksList;
