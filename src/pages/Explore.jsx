import axios from 'axios'
import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'
import useLocalStorage from '../hooks/useLocalStorage'

const MAX_HISTORY = 5
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY

// Shared helper so "featured" and "search" hit the API the same way
const fetchBooks = async (query, maxResults = 20) => {
  const result = await axios.get(
    'https://www.googleapis.com/books/v1/volumes',
    {
      params: {
        q: query,
        maxResults,
        ...(API_KEY ? { key: API_KEY } : {})
      }
    }
  )

  const items = result.data.items || []

  return items.map((item) => {
    const info = item.volumeInfo || {}
    return {
      id: item.id,
      title: info.title || 'Unknown Title',
      authors: info.authors || ['Unknown Author'],
      year: info.publishedDate ? info.publishedDate.slice(0, 4) : '',
      thumbnail: info.imageLinks ? info.imageLinks.thumbnail : ''
    }
  })
}

const getErrorMessage = (err) => {
  if (err.response) {
    return (
      err.response.data?.error?.message ||
      `Request failed (status ${err.response.status}). Please try again.`
    )
  }
  if (err.request) {
    return 'No response from Google Books — check your internet connection.'
  }
  return 'Unable to load books. Please try again.'
}

const Explore = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)
  const [searchHistory, setSearchHistory] = useLocalStorage('recentSearches', [])
  const [activeQuery, setActiveQuery] = useState('')

  const [featured, setFeatured] = useState([])
  const [featuredLoading, setFeaturedLoading] = useState(true)
  const [featuredError, setFeaturedError] = useState('')

  // Load a default set of books to show before the user searches anything
  useEffect(() => {

    let isMounted = true

    const loadFeatured = async () => {
      try {
        const results = await fetchBooks('bestselling fiction', 8)
        if (isMounted) setFeatured(results)
      } catch (err) {
        console.error('Featured books fetch failed:', err)
        if (isMounted) setFeaturedError(getErrorMessage(err))
      } finally {
        if (isMounted) setFeaturedLoading(false)
      }
    }

    loadFeatured()

    return () => { isMounted = false }

  }, [])

  const handleSearch = async (query) => {

    setLoading(true)
    setError('')
    setSearched(true)
    setActiveQuery(query)

    setSearchHistory((prev) => {
      const withoutDuplicate = prev.filter(
        (item) => item.toLowerCase() !== query.toLowerCase()
      )
      return [query, ...withoutDuplicate].slice(0, MAX_HISTORY)
    })

    try {
      const formattedBooks = await fetchBooks(query, 20)
      setBooks(formattedBooks)
    } catch (err) {
      console.error('Google Books search failed:', err)
      setError(getErrorMessage(err))
      setBooks([])
    } finally {
      setLoading(false)
    }

  }


  return (

    <main className="explore-page">

      <section className="explore-header">

        <p>BOOK DISCOVERY</p>

        <h1>
          Explore Our Library
        </h1>

        <span>
          Search for books, authors, and subjects
          to find your next great read.
        </span>

      </section>


      <section className="explore-search">

        <SearchBar
          onSearch={handleSearch}
          initialQuery={activeQuery}
        />

        {searchHistory.length > 0 && (

          <div className="search-history">

            <span className="search-history-label">Recent:</span>

            {searchHistory.map((term) => (

              <button
                key={term}
                type="button"
                className="search-history-chip"
                onClick={() => handleSearch(term)}
              >
                {term}
              </button>

            ))}

          </div>

        )}

      </section>


      {/* ============ FEATURED BOOKS (shown before any search) ============ */}

      {!searched && (

        <section className="book-results">

          <div className="results-heading">
            <h2>Featured Books</h2>
            <span>Handpicked to get you started</span>
          </div>

          {featuredLoading && (
            <div className="explore-message">
              <Loader text="Loading featured books..." />
            </div>
          )}

          {!featuredLoading && featuredError && (
            <div className="explore-error">
              {featuredError}
            </div>
          )}

          {!featuredLoading && !featuredError && (

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">

              {featured.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}

            </div>

          )}

        </section>

      )}


      {/* ============ SEARCH RESULTS ============ */}

      {searched && loading && (

        <div className="explore-message">
          <Loader text="Searching for books..." />
        </div>

      )}

      {searched && !loading && error && (

        <div className="explore-error">
          {error}
        </div>

      )}

      {searched &&
        !loading &&
        !error &&
        books.length === 0 && (

          <div className="explore-message">
            <h3>No books found</h3>
            <p>Try another title, author, or subject.</p>
          </div>

        )}

      {searched &&
        !loading &&
        !error &&
        books.length > 0 && (

          <section className="book-results">

            <div className="results-heading">
              <h2>Search Results</h2>
              <span>{books.length} books found</span>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">

              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}

            </div>

          </section>

        )}

    </main>

  )

}

export default Explore