import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './InputBook.css';

const InputBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const { title, author, category } = bookData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addBookHandler = (e) => {
    e.preventDefault();

    if (title !== '' && author !== '' && category !== '') {
      const newBook = {
        item_id: uuidv4(),
        ...bookData,
      };

      dispatch(addBook(newBook));
      setBookData({
        title: '',
        author: '',
        category: '',
      });
    }
  };

  return (
    <>
      <form className="form-container">
        <hr />
        <h3 className="form-title">ADD NEW BOOK</h3>
        <div className="form-content">
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author..."
            value={author}
            onChange={handleInputChange}
          />
          <select name="category" value={category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="Memoir">Memoir</option>
            <option value="Science">Science</option>
            <option value="Travel">Travel</option>
            <option value="Business/Finance">Business/Finance</option>
            <option value="Poetry">Poetry</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Comedy/Humor">Comedy/Humor</option>
            <option value="Drama/Play">Drama/Play</option>
            <option value="Novels/Comics">Novels/Comics</option>
            <option value="Cookbooks">Cookbooks</option>
          </select>
          <button type="button" onClick={addBookHandler}>
            ADD BOOK
          </button>
        </div>
      </form>
    </>
  );
};

export default InputBook;
