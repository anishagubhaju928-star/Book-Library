import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import BookDetails from './pages/BookDetails'
import SavedList from './pages/SavedList'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Explore */}
          <Route path="explore" element={<Explore />} />

          {/* Book Details */}
          <Route path="book/:book_id" element={<BookDetails />} />

          {/* My To-Read List */}
          <Route path="saved" element={<SavedList />} />

          {/* About */}
          <Route path="about" element={<About />} />

          {/* Contact */}
          <Route path="contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default MyRoute