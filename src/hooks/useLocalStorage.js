import { useEffect, useState } from 'react'

// A small reusable hook that behaves like useState but keeps its
// value in sync with localStorage under the given key.
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.log('Error reading localStorage key', key, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log('Error writing localStorage key', key, error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
