import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">

      <h3 className="footer-brand"> <img src="book.png" alt="BookNest Logo" style={{ width: '50px', height: '50px'}} /> BookNest</h3>
      <p className="footer-tagline">
        Discover stories. Save favorites. Build your next reading list.
      </p>

      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/saved">To-Read List</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BookNest</span>
        <span className="footer-dot">•</span>
        <span>Built with React &amp; Google Books API</span>
      </div>

    </div>
  </footer>
)

export default Footer