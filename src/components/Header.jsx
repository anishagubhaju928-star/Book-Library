import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="main-header">


      <Link to="/" className="site-logo">

        <img
          src="/logo.jpg"
          alt="Book Library Logo"
        />

        <div>
          <h2>Book Library</h2>
          <span>Discover • Read • Enjoy</span>
        </div>

      </Link>


      <nav className="main-navigation">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Explore
        </NavLink>


        <NavLink
          to="/saved"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          My To-Read List
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>


        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>

      </nav>

    </header>
  )
}

export default Header