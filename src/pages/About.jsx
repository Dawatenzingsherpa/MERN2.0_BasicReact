import React from 'react'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About BookVerse</h1>
        <p>
          Connecting readers with books that inspire, educate, and entertain.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>📚 Our Mission</h2>
          <p>
            At BookVerse, we believe that books have the power to transform
            lives. Our mission is to make reading accessible and enjoyable for
            everyone by offering a diverse collection of books across all
            genres.
          </p>
        </div>

        <div className="about-card">
          <h2>🌟 What We Offer</h2>
          <p>
            From bestselling novels and self-help books to academic resources
            and timeless classics, our platform helps readers discover their
            next favorite book with ease.
          </p>
        </div>

        <div className="about-card">
          <h2>🤝 Our Community</h2>
          <p>
            BookVerse is more than a bookstore. It's a community of readers,
            learners, and dreamers who share a passion for knowledge and
            storytelling.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h2>10K+</h2>
          <p>Books Available</p>
        </div>

        <div className="stat-box">
          <h2>5K+</h2>
          <p>Happy Readers</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Book Categories</p>
        </div>
      </section>
    </div>
  )
}

export default About