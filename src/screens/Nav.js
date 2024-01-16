import { Outlet, Link } from 'react-router-dom'
import React from 'react'
import '../css/Nav.css'

const Nav = () => {
  return (
    <nav className='Main_nav '>
      <div className='Comp_nav m-lg-3 '>
        <h3 className=''>AvancerPi</h3>
        <img
          src='https://s3-us-west-2.amazonaws.com/kredily-companies-media/kredily1-bc022b0d-6957-42d2-b76d-301839644c88/company_logo_11c53ba837f011ee8fd09aa3d933999f29091.png'
          width='30'
          height='30'
        />
      </div>
      {/* /////////////////////////// */}
      <div className='Sec_nav'>
        <ul>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/about'>About</Link>
          </div>
          <div>
            <Link to='/services'>Service</Link>
          </div>
        </ul>
      </div>
      {/* ////////////////////////////////////////// */}
    </nav>
  )
}

export default Nav
