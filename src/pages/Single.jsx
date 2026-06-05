import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Single = () => {

  const { id } = useParams();

  const [book, setBook] = useState({});

  async function fetchBook() {
    const response = await axios.get(`https://mern2-0-basicnode-1.onrender.com/book/${id}`);
    console.log(response.data.data);
    setBook(response.data.data);
  }

  useEffect(() => {
    fetchBook();
  }, []);



  

  return (
    <>
      <div className="single-book">
        <div className="book-image-container">
          <img src={book.imageURL} alt={book.bookName} className="book-image" />
        </div>

        <div className="book-details">
          <h1 className="book-title">{book.bookName}</h1>

          <div className="detail-item">
            <span className="label">Author:</span>
            <span>{book.authorName}</span>
          </div>

          <div className="detail-item">
            <span className="label">Price:</span>
            <span>Rs. {book.bookPrice}</span>
          </div>

          <div className="detail-item">
            <span className="label">ISBN Number:</span>
            <span>{book.isbrNumber}</span>
          </div>

          <div className="detail-item">
            <span className="label">Published At:</span>
            <span>{book.publishedAt}</span>
          </div>

          <div className="detail-item">
            <span className="label">Publisher:</span>
            <span>{book.publisher}</span>
          </div>

          <Link to="/books" className="btn btn-secondary back-btn">
            Back to Books
          </Link>
          <Link to={`/edit/${book._id}`} className="btn btn-primary edit-btn">
            Edit Book
          </Link>
          
        </div>
    </div>
    </>

  );
};

export default Single;