const Home = () => {

  const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
  },
];


  return (
    <>
      <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Book</h1>
          <p>
            Explore thousands of books from bestselling authors and hidden gems.
          </p>
          <button className="hero-btn">Browse Collection</button>
        </div>
      </section>

      <section className="featured-books">
        <h2>Featured Books</h2>

        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button>View Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>

  )

}

export default Home