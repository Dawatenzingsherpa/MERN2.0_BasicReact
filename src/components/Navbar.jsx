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
        <li><a href="/">Home</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      <div className="nav-actions">
        <input
          type="text"
          placeholder="Search books..."
          className="search-box"
        />
        <button className="login-btn">Login</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar