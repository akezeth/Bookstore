import { useState } from 'react';
import PropTypes from 'prop-types';

function InputBook({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title..."
        name="title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Author..."
        name="author"
        value={author}
        onChange={handleChange}
      />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

InputBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default InputBook;
