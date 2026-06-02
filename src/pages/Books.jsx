import React from "react";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=500",
  },
];

const Books = () => {
  return (
    <div className="books-page">
      <div className="books-header">
        <h1>Our Book Collection</h1>
        <p>Browse through our most popular books.</p>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />

            <div className="book-details">
              <h3>{book.title}</h3>
              <p>{book.author}</p>

              <div className="book-footer">
                <span>{book.price}</span>
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