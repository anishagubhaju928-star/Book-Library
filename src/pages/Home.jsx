import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="home-hero-content">

          <p className="home-label">
            WELCOME TO OUR LIBRARY
          </p>

          <h1>
            Discover Stories
            <br />
            <span>That Stay With You.</span>
          </h1>

          <p className="home-description">
            Explore thousands of books, discover new authors,
            and build your own personal reading collection.
          </p>

          <Link
            to="/explore"
            className="home-explore-button"
          >
            Explore Books →
          </Link>

        </div>

        <div className="home-hero-image">

          <img
            src="/a1.jpg"
            alt="Books"
          />

        </div>

      </section>


      {/* ================= BANNER CAROUSEL ================= */}

      <section className="banner-section">

        <div className="banner-heading">

          <p>FEATURED COLLECTION</p>

          <h2>
            Explore Our Collection
          </h2>

          <span>
            Scroll through our featured collection
            and discover something new.
          </span>

        </div>


        <div className="banner-scroll">

          <div className="banner-card">

            <img
              src="/a1.jpg"
              alt="Featured books"
            />

            <div className="banner-text">
              <small>FEATURED</small>
              <h3>Discover New Stories</h3>
            </div>

          </div>


          <div className="banner-card">

            <img
              src="/a2.jpg"
              alt="Popular books"
            />

            <div className="banner-text">
              <small>POPULAR</small>
              <h3>Popular Reads</h3>
            </div>

          </div>


          <div className="banner-card">

            <img
              src="/a3.jpg"
              alt="Book collection"
            />

            <div className="banner-text">
              <small>COLLECTION</small>
              <h3>Build Your Collection</h3>
            </div>

          </div>


          <div className="banner-card">

            <img
              src="/a4.jpg"
              alt="Reading collection"
            />

            <div className="banner-text">
              <small>READING</small>
              <h3>Find Your Next Read</h3>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="home-features">

        <div className="home-section-heading">

          <p>WHY BOOK LIBRARY?</p>

          <h2>
            Everything For Your Reading Journey
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature-box">

            <div className="feature-icon">
              🔍
            </div>

            <h3>Discover Books</h3>

            <p>
              Search for books by title, author,
              or subject using our library.
            </p>

          </div>


          <div className="feature-box">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>Save Your Favorites</h3>

            <p>
              Keep books you want to read later
              in your personal To-Read List.
            </p>

          </div>


          <div className="feature-box">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>Rate & Take Notes</h3>

            <p>
              Add ratings and personal notes
              to your saved books.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <p>
          START YOUR READING JOURNEY
        </p>

        <h2>
          Your Next Favorite Book
          <br />
          Is Waiting For You.
        </h2>

        <Link
          to="/explore"
          className="cta-button"
        >
          Explore The Library →
        </Link>

      </section>

    </main>
  )
}

export default Home