import React from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import HomePage from './componants/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BrowsePage from './componants/BrowsePage'
import DetailsPage from './componants/DetailsPage'
import StreamPage from './componants/StreamPage'
import ProfilePage from './componants/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <div className='mainApp'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/stream" element={<StreamPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
