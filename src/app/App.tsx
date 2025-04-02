import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Project/Projects";
import Project from "../pages/Project/Project";
import Navbar from "../components/Navbar/Navbar";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";
import Error from "../pages/Error";
import ScrollToTop from "../lib/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-neutral-100">
        <ScrollToTop />
        <main className="flex-1 flex flex-col w-full items-center pt-16">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
