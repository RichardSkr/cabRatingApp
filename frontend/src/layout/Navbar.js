import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a 
    className="navbar-brand" 
    href="#">
        Cab Reviews
    </a>

  <Link className='btn btn-outline-light' to="/addDriver">
    Add Cab Driver
  </Link>
</nav>
    </div>
  )
}
