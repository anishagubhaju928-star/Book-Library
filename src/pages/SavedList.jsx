import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import BookCard from '../components/BookCard'
import useLocalStorage from '../hooks/useLocalStorage'

const SavedList = () => {
  const [savedBooks, setSavedBooks] = useLocalStorage('toReadList', [])
  const [sortBy, setSortBy] = useState('addedAt')

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Remove this book?',
      text: 'It will be removed from your To-Read list.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it',
      confirmButtonColor: '#2f2924',
    }).then((result) => {
      if (result.isConfirmed) setSavedBooks(savedBooks.filter((item) => item.id !== id))
    })
  }

  const sortedBooks = [...savedBooks].sort((a, b) => {
    if (sortBy === 'title') return (a.title || '').localeCompare(b.title || '')
    if (sortBy === 'year') return (a.year || '').localeCompare(b.year || '')
    return new Date(b.addedAt) - new Date(a.addedAt)
  })

  return (
    <section className="section-space">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">YOUR COLLECTION</span>
            <h1>My To-Read List</h1>
          </div>
          {savedBooks.length > 0 && (
            <div className="sort-control">
              <label htmlFor="sort">Sort by</label>
              <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="addedAt">Date Added</option>
                <option value="title">Title</option>
                <option value="year">Year</option>
              </select>
            </div>
          )}
        </div>

        {savedBooks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h2>Your shelf is waiting.</h2>
            <p>Search for a book and save it here to build your personal reading list.</p>
            <Link to="/" className="btn btn-dark">Discover Books</Link>
          </div>
        ) : (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {sortedBooks.map((book) => (
              <BookCard key={book.id} book={book}>
                {book.rating > 0 && <p className="saved-rating mb-0">{'★'.repeat(book.rating)}<span>{'★'.repeat(5 - book.rating)}</span></p>}
                {book.notes && <p className="saved-note mb-0">“{book.notes}”</p>}
                <button className="btn btn-sm btn-outline-danger w-100" onClick={() => handleRemove(book.id)}>Remove</button>
              </BookCard>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SavedList
