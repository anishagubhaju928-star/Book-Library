Book Library
BookNest is a responsive single-page application built with React that lets you discover books through the Google Books API. You can search for titles, authors, or topics, open a detailed view for any book, and build a personal To-Read List with your own ratings and notes that is saved in your browser.

Features
1. Search books by title, author, or keyword using the Google Books API.
2. Featured books shown on the Explore page before any search is made.
3. Recent search history (last 5 searches) that can be clicked to search again.
4. Responsive card grid showing cover, title, author, and year.
5. Book details page with cover, authors, published date, page count, rating, and description.
6. Add books to a personal To-Read List and remove them with a confirmation dialog.
7. To-Read List persisted with localStorage, so it survives page refreshes.
8. Sort saved books by date added, title, or year.
9. Loading, error, empty, and "no results found" states throughout the app.
10. Multi-page navigation: Home, Explore, Book Details, To-Read List, About, Contact.
11. Contact form with controlled inputs and a success message.
12. Responsive layout for desktop, tablet, and mobile screens.

Libraries used
1. React (functional components and hooks only)
2. Vite — development server and build tool
3. React Router — client-side routing
4. Axios — API requests
5. SweetAlert2 — alerts and confirmation dialogs
6. Bootstrap 5 — grid and utility classes (loaded via CDN)
7. Google Books API — book data
7. Custom CSS — BookNest visual design

Setup instructions
1. Add a Google Books API key
Google Books requires an API key for reliable access. Requests without a key are rejected with a 429 quota exceeded error.
- Create a project at Google Cloud Console.
- Enable the Books API for that project.
- Create an API key under APIs & Services → Credentials.
- In the project root (next to package.json), create a file named .env containing:
VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
The .env file is listed in .gitignore, so your key is never committed.

2. Start the development server
npm run dev
Open the local URL shown in the terminal, normally http://localhost:5173. Restart the server any time you change .env.

3. Clone the repository and install dependencies
git clone <your-repository-url>
cd book-library
npm install

Screenshots
1. Home page
![alt text](<public/Screenshot 2026-09-28 100012.png>)
2. Explore page
![alt text](<public/Screenshot 2026-09-28 100135.png>)
3. Book Details page
![alt text](<public/Screenshot 2026-09-28 100250.png>)
4. My To-Read list
![alt text](<public/Screenshot 2026-09-28 100401.png>)



