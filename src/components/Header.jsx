import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='navbar navbar-expand-md fixed-top navbar-dark bg-primary'>
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
          
              <i className="bi bi-film"></i>MovieHunt</NavLink>

{/* toggle start */}
<button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#menu">
  <span className='navbar-toggler-icon'></span>
</button>
{/* toggle end */}
              <div className="collapse navbar-collapse" id="menu">
                <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                  <li  className='nav-item'>
                    <NavLink className="nav-link" to="/">
                      Home
                      </NavLink></li>
                  <li  className='nav-item'>
                    <NavLink className="nav-link" to="/movies/top">
                      Top Rated
                      </NavLink></li>
                  <li  className='nav-item'>
                    <NavLink className="nav-link" to="/movies/popular">
                      Popular
                      </NavLink></li>
                  <li  className='nav-item'>
                    <NavLink className="nav-link" to="/movies/upcoming">
                      Upcoming
                      </NavLink></li>
                </ul>
                <form action="#">
                  <input type="search" className='form-control' placeholder='Search Here'/>
                </form>
              </div>
              
            </div>      
      </div>
  )
}

