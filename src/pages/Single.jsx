import React from "react";
import { useParams } from "react-router-dom";

const books = [
  {
    id: 1,
    bookName: "Atomic Habits",
    bookPrice: 499,
    isbrNumber: "9780735211292",
    authorName: "James Clear",
    publishedAt: "2018-10-16",
    publisher: "Avery",
    image: "https://via.placeholder.com/300x400",
  },
];

const Single = () => {
  const { id } = useParams();

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="container mt-5">
        <h2>Book not found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={book.image}
            alt={book.bookName}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-8">
          <h2>{book.bookName}</h2>

          <table className="table table-bordered mt-3">
            <tbody>
              <tr>
                <th>Author</th>
                <td>{book.authorName}</td>
              </tr>

              <tr>
                <th>Price</th>
                <td>Rs. {book.bookPrice}</td>
              </tr>

              <tr>
                <th>ISBN Number</th>
                <td>{book.isbrNumber}</td>
              </tr>

              <tr>
                <th>Published Date</th>
                <td>{book.publishedAt}</td>
              </tr>

              <tr>
                <th>Publisher</th>
                <td>{book.publisher}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Single;