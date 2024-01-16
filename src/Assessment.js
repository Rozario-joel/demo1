import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Header = () => (
  <header style={{ backgroundColor: 'blue' }}>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
      </ul>
    </nav>
  </header>
)

const Footer = () => (
  <footer style={{ backgroundColor: 'blue', height: '200px' }}>
    <p>Footer content</p>
  </footer>
)

const HomePage = () => (
  <div>
    <img src='mainImage.jpg' alt='Main banner' />
    <p>Dummy text content for the page</p>
  </div>
)

const AboutPage = () => (
  <div>
    <img src='aboutImage.jpg' alt='About banner' />
    <p>Dummy text content for the page</p>
  </div>
)

const ServiceCard = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

const ServicesPage = () => (
  <div>
    {[...Array(6)].map((_, i) => (
      <ServiceCard
        key={i}
        title={`Service ${i + 1}`}
        description='Service description'
      />
    ))}
  </div>
)

const App = () => (
  <Router>
    <Header />
    <Route path='/' exact component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/services' component={ServicesPage} />
    <Footer />
  </Router>
)

export default App
