
const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="text-center my-5">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted mt-2">{text}</p>
    </div>
  )
}

export default Loader
