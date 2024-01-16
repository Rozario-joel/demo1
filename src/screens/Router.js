import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Services'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/home' Component={Home}></Route>
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Service} />
        <Route path='*' element={<h1>404 No page found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
