import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Project from './pages/Project'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-100 dark:bg-gray-900">
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-row items-center bg-red-500 justify-center">
            <h1>Test</h1>
          </div>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  )
}

export default App