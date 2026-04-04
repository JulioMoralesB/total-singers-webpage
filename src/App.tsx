import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Shows from './pages/Shows'
import ShowDetail from './pages/ShowDetail'
import Team from './pages/Team'
import SingerDetail from './pages/SingerDetail'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="pt-20 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/shows/:slug" element={<ShowDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:slug" element={<SingerDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
