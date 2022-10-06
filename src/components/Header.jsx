import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {

  return (
    <>
      <section className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-3"></div>
            <div className="col-xl-6">
            <nav>
          <ul>
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/">Service</Link></li>
            <li><Link className="link" to="/">Portfolio</Link></li>
            <li><Link className="link" to="/">Blog</Link></li>
            <li><Link className="link" to="/">Contact</Link></li>
          </ul>
        </nav>
            </div>
            <div className="col-xl-3">
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
