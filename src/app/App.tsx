import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Project from '../pages/Project'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-neutral-100 ">
        <main className="flex-1 h-full w-full">
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