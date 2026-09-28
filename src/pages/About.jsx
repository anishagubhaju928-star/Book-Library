const About = () => {
  return (

    <main className="simple-page">

      <section className="simple-hero">

        <p>ABOUT US</p>

        <h1>
          About Our Book Library
        </h1>

        <span>
          A simple place to discover,
          explore, and organize books.
        </span>

      </section>


      <section className="about-content">

        <div className="about-image">

          <img
            src="/a2.jpg"
            alt="Books"
          />

        </div>


        <div className="about-text">

          <p className="small-title">
            OUR LIBRARY
          </p>

          <h2>
            Making Book Discovery Simple
          </h2>

          <p>
            Our Book Library is designed to make
            discovering and organizing books simple
            and enjoyable.
          </p>

          <p>
            Users can search for books, view book
            information, save books to a personal
            To-Read List, and keep track of their
            reading interests.
          </p>

          <p>
            Whether you are looking for your next
            favorite novel or exploring a new subject,
            our library gives you a simple place to
            start.
          </p>

        </div>

      </section>

    </main>
  )
}

export default About