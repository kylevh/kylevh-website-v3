import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-neutral-100">
      <main className="flex-1 flex flex-col w-full items-center pt-16">
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