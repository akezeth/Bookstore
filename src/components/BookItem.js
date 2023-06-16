import PropTypes from 'prop-types';

function BookItem({ book, delBook }) {
  return (
    <li>
      <div>
        <span>Title: </span>
        {book.title}
      </div>
      <div>
        <span>Author: </span>
        {book.author}
      </div>
      <button type="button" onClick={() => delBook(book.id)}>Delete Book</button>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};

BookItem.propTypes = {
  delBook: PropTypes.func.isRequired,
};

export default BookItem;
