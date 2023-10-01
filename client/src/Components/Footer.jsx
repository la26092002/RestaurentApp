import React from 'react'

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">© {new Date().getFullYear()} Bena</span>
      </div>
    </footer>
  )
}

export default Footer