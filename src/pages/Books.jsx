import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";




const Books = () => {

  const [books, setBooks] = useState([]);
  async function fetchBooks() {
    const response = await axios.get("https://mern2-0-basicnode-1.onrender.com/book");
    setBooks(response.data.data);  
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="books-page">
      <div className="books-header">
        <h1>Our Book Collection</h1>
        <p>Browse through our most popular books.</p>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.imageURL} alt={book.bookName} />

            <div className="book-details">
              <h3>{book.bookName}</h3>
              <p>{book.authorName}</p>

              <div className="book-footer">
                <span>{book.bookPrice}</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;