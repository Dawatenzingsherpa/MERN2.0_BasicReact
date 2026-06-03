import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <h2>📚 BookVerse</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/create">Create Book</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="nav-actions">
        <input
          type="text"
          placeholder="Search books..."
          className="search-box"
        />
      </div>
    </nav>
    </>
  )
}

export default Navbar