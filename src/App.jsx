import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useSpotlight } from './hooks/useSpotlight'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import BackToTop from './components/ui/BackToTop'
import FloatingContact from './components/ui/FloatingContact'
import LoadingScreen from './components/ui/LoadingScreen'
import MouseGlow from './components/ui/MouseGlow'
import ScrollProgress from './components/ui/ScrollProgress'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'

export default function App() {
  const [loading, setLoading] = useState(true)
  useSpotlight()

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <div className="relative min-h-screen">
            <ScrollProgress />
            <MouseGlow />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <FloatingContact />
            <BackToTop />
          </div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  )
}
