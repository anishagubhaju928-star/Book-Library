import { Link } from 'react-router-dom'

const FALLBACK_COVER = 'https://placehold.co/300x440/f3eee7/493b2f?text=No+Cover'

const BookCard = ({ book, children }) => {
  const title = book.title || 'Untitled'
  const authors = book.authors?.join(', ') || 'Unknown author'

  return (
    <div className="col">
      <article className="book-card h-100">
        <Link to={`/book/${book.id}`} className="book-cover-wrap" aria-label={`View ${title}`}>
          <img
            src={book.thumbnail || FALLBACK_COVER}
            className="book-cover"
            alt={title}
            loading="lazy"
          />
          <span className="cover-badge">{book.year || 'Book'}</span>
        </Link>

        <div className="book-card-body">
          <p className="book-author">{authors}</p>
          <h3 className="book-title" title={title}>{title}</h3>
          <div className="book-meta">
            <span>📅 {book.year || 'Year unknown'}</span>
          </div>
          <div className="mt-auto pt-3 d-flex flex-column gap-2">
            <Link to={`/book/${book.id}`} className="btn btn-dark w-100">View Details</Link>
            {children}
          </div>
        </div>
      </article>
    </div>
  )
}

export default BookCard
