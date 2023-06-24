import { Route, Routes, Link } from 'react-router-dom';
import { UilUser } from '@iconscout/react-unicons';
import Books from './components/Books';
import Categories from './components/Categories';

import './App.css';

function App() {
  return (
    <div className="topContainer">
      <div className="navbar">
        <div className="container">
          <div className="nav-left">
            <h2 className="logo">Bookstore CMS</h2>
            <Link to="/" className="home">
              Books
            </Link>
            <Link to="/categories" className="categories">
              Categories
            </Link>
          </div>
          <UilUser size="31" color="#0290ff" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
