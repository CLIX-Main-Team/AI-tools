import { Routes, Route, Link, useLocation } from 'react-router'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import ToolPage from './pages/ToolPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <Link to="/" className="brand">
          <img src="/clix-logo.png" alt="Clix" className="brand-logo" />
          <span className="brand-text">
            הכלי היומי
            <small>מדריך AI חדש כל בוקר</small>
          </span>
        </Link>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="tool/:id" element={<ToolPage />} />
      </Routes>
      <footer className="site-footer">
        נבנה באהבה ע"י קהילת חדשות ה-AI · כלי חדש כל יום
      </footer>
    </>
  )
}
