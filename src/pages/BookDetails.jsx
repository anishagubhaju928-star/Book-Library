import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../components/Loader'
import useLocalStorage from '../hooks/useLocalStorage'

const BookDetails = () => {
  const { book_id: bookId } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')
  const [savedBooks, setSavedBooks] = useLocalStorage('toReadList', [])

   useEffect(() => {
    setLoading(true)
    setError('')
    const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
    axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`, {
      params: apiKey ? { key: apiKey } : {}
    })
      .then((result) => setBook(result.data))
      .catch((err) => {
        console.error('Book details fetch failed:', err)
        const message =
          err.response?.data?.error?.message ||
          'Could not load this book. It may no longer be available.'
        setError(message)
      })
      .finally(() => setLoading(false))
  }, [bookId])
  const isSaved = savedBooks.some((item) => item.id === bookId)

  const handleAddToList = () => {
    if (isSaved) return
    const info = book.volumeInfo || {}
    const newEntry = {
      id: bookId,
      title: info.title,
      authors: info.authors,
      year: info.publishedDate ? info.publishedDate.slice(0, 4) : '',
      thumbnail: info.imageLinks?.thumbnail?.replace('http://', 'https://') || '',
      rating,
      notes,
      addedAt: new Date().toISOString(),
    }
    setSavedBooks([...savedBooks, newEntry])
    Swal.fire({ title: 'Added!', icon: 'success', text: 'Book added to your To-Read list.', timer: 1800, showConfirmButton: false })
  }

  if (loading) return <Loader text="Loading book details..." />

  if (error) return (
    <div className="container section-space text-center">
      <div className="status-box error-box">{error}</div>
      <Link to="/" className="btn btn-dark mt-3">Back to Search</Link>
    </div>
  )

  const info = book.volumeInfo || {}
  const cover = info.imageLinks?.thumbnail?.replace('http://', 'https://') || 'https://placehold.co/350x500/f3eee7/493b2f?text=No+Cover'

  return (
    <section className="section-space">
      <div className="container">
        <Link to="/" className="back-link">← Back to books</Link>
        <div className="details-panel">
          <div className="details-cover">
            <img src={cover} alt={info.title} />
          </div>

          <div className="details-content">
            <span className="eyebrow">{info.categories?.[0] || 'BOOK DETAILS'}</span>
            <h1>{info.title}</h1>
            <p className="details-author">{info.authors?.join(', ') || 'Unknown author'}</p>

            <div className="detail-pills">
              {info.publishedDate && <span>📅 {info.publishedDate}</span>}
              {info.pageCount && <span>📄 {info.pageCount} pages</span>}
              {info.averageRating && <span>★ {info.averageRating}/5</span>}
            </div>

            <div className="description" dangerouslySetInnerHTML={{
              __html: info.description || 'No description available for this book.'
            }} />

            <div className="save-form">
              <h3>Add to your To-Read List</h3>
              <div className="row g-3">
                <div className="col-sm-5">
                  <label className="form-label">Your rating</label>
                  <select className="form-select" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    <option value={0}>No rating</option>
                    <option value={1}>1 — Poor</option>
                    <option value={2}>2 — Fair</option>
                    <option value={3}>3 — Good</option>
                    <option value={4}>4 — Very Good</option>
                    <option value={5}>5 — Excellent</option>
                  </select>
                </div>
                <div className="col-sm-7">
                  <label className="form-label">Personal note</label>
                  <input className="form-control" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Why do you want to read this?" />
                </div>
              </div>
              <button className="btn btn-dark mt-3" onClick={handleAddToList} disabled={isSaved}>
                {isSaved ? '✓ Already in To-Read List' : '+ Add to To-Read List'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails
