import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2>📚 BookVerse</h2>
          <p>
            Discover, explore, and enjoy thousands of books from every genre.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Fiction</li>
            <li>Science</li>
            <li>History</li>
            <li>Self-Help</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@bookverse.com</p>
          <p>Phone: +977 9800000000</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BookVerse. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer