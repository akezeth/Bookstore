import { Route, Routes, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
