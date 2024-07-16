import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Article from './pages/Articles/Articles'
import Webinars from './pages/Webinars/Webinars'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element = {<Home/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Article />} />
          <Route path='/webinars' element={<Webinars />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
