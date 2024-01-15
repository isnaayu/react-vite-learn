import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/parent">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/showName">Show Name</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/todo">TodoList</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/counter">Counter</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet/>
      </>
    )
  }
}

// export default Nav
