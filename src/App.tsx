import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Shows from './pages/Shows'
import ShowDetail from './pages/ShowDetail'
import Team from './pages/Team'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:id" element={<ShowDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
