import { useState } from 'react'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)


  const handleChange = (event) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

  }


  const handleSubmit = (event) => {

    event.preventDefault()

    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      message: ''
    })

  }


  return (

    <main className="contact-page">

      <section className="simple-hero">

        <p>GET IN TOUCH</p>

        <h1>
          Contact Us
        </h1>

        <span>
          Have a question or feedback?
          We would love to hear from you.
        </span>

      </section>


      <section className="contact-content">

        <div className="contact-info">

          <h2>
            Let's Talk
          </h2>

          <p>
            If you have any questions about the
            library, books, or your reading list,
            feel free to contact us.
          </p>


          <div className="contact-item">

            <strong>
              📧 Email
            </strong>

            <span>
              booklibrary@gmail.com
            </span>

          </div>


          <div className="contact-item">

            <strong>
              📚 Library
            </strong>

            <span>
              Your Digital Book Library
            </span>

          </div>

        </div>


        <div className="contact-form">

          {submitted && (

            <div className="success-message">

              Thank you! Your message has been
              submitted.

            </div>

          )}


          <form onSubmit={handleSubmit}>

            <label>
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />


            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />


            <label>
              Message
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              required
            />


            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>

  )
}

export default Contact