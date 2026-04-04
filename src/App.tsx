import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Shows from './pages/Shows'
import Setlist from './pages/Setlist'
import Team from './pages/Team'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/setlist" element={<Setlist />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
