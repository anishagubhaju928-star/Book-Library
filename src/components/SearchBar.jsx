import { useEffect, useState } from 'react'

const SearchBar = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery)

  // Keep the input text in sync when a parent triggers a search
  // programmatically (e.g. clicking a "recent search" chip).
  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = query.trim()
    if (value) onSearch(value)
  }

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <span className="search-icon">⌕</span>
      <input
        type="text"
        aria-label="Search books"
        placeholder="Search by title, author, or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn search-btn" type="submit">Search</button>
    </form>
  )
}

export default SearchBar
