import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-neutral-100">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <main 
        className="flex-1 flex flex-col w-full items-center pt-16"
        role="main"
        aria-label="Main content"
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
        <ScrollRestoration />
      </main>
    </div>
  );
}

export default App;