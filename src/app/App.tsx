import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Project/Projects";
import Project from "../pages/Project/Project";
import Navbar from "../components/Navbar/Navbar";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";

function App() {
  return (
    <Router>
      <div className="h-screen w-full flex flex-col overflow-x-hidden bg-neutral-100">
        <main className="flex-1 flex flex-col h-full w-full items-center mt-16 overflow-hidden">
        <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
