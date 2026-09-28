import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1>404</h1>
      <p className="text-muted">Page not found.</p>
      <Link to="/" className="btn btn-dark btn-sm">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
