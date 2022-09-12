import React from 'react'
import './App.css'

import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import MarketPage from './Pages/MarketPage'
import NavBarApp from './components/NavBarApp'
import ContactUsPage from './Pages/ContactUsPage'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarApp />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact_us' element={<ContactUsPage />} />
          <Route path='market' element={<MarketPage />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
