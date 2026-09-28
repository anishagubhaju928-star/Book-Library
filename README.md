# Book Library

Book Library is a responsive single-page application built with React that lets you discover books through the Google Books API. You can search for titles, authors, or topics, open a detailed view for any book, and build a personal To-Read List with your own ratings and notes that is saved in your browser.

## Features

1. Search books by title, author, or keyword using the Google Books API.
2. Featured books shown on the Explore page before any search is made.
3. Recent search history (last 5 searches) that can be clicked to search again.
4. Responsive card grid showing cover, title, author, and year.
5. Book details page with cover, authors, published date, page count, rating, and description.
6. Add books to a personal To-Read List and remove them with a confirmation dialog.
7. Personal star rating and notes for each saved book.
8. To-Read List persisted with `localStorage`, so it survives page refreshes.
9. Sort saved books by date added, title, or year.
10. Loading, error, empty, and "no results found" states throughout the app.
11. Multi-page navigation: Home, Explore, Book Details, To-Read List, About, Contact.
12. Contact form with controlled inputs and a success message.
13. Responsive layout for desktop, tablet, and mobile screens.

## Technologies / Libraries Used

1. React (functional components and hooks only)
2. Vite — development server and build tool
3. React Router — client-side routing
4. Axios — API requests
5. SweetAlert2 — alerts and confirmation dialogs
6. Bootstrap 5 — grid and utility classes (loaded via CDN)
7. Google Books API — book data
8. Custom CSS — BookNest visual design

## Setup Instructions

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/anishagubhaju928-star/Book-Library.git
cd Book-Library
npm install
```

### 2. Add a Google Books API key

Google Books requires an API key for reliable access. Requests without a key are rejected with a `429 quota exceeded` error.

- Create a project at [Google Cloud Console](https://console.cloud.google.com/).
- Enable the **Books API** for that project.
- Create an API key under **APIs & Services → Credentials**.
- In the project root (next to `package.json`), create a file named `.env` containing:

```
VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
```

The `.env` file is listed in `.gitignore`, so your key is never committed.

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, normally `http://localhost:5173`. Restart the server any time you change `.env`.

## Screenshots

### Home page
![Home page](<home.png>)

### Explore page
![Explore page](<explore.png>)

### Book details page
![Book details page](<details.png>)

### My To-Read list
![My To-Read list](<saved-list.png>)

## Known Limitations

- A Google Books API key is required. Without one the app cannot load books.
- The free API quota is limited, so heavy use can temporarily return quota errors.
- Google Books does not provide a cover, description, or rating for every book, so some details may be missing.
- Search results are limited to 20 books per search, and there is no pagination.
- The featured books on the Explore page come from a fixed search term and are not hand-curated.
- The To-Read List is stored in browser `localStorage`, so it does not sync between devices or browsers.
- The Contact form shows a success message but does not send the message anywhere.
- An internet connection is required to load live book data.
