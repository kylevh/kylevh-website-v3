import { memo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
})
  .format(new Date())
  .toLowerCase();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if we should show back button
  const showBackButton = location.pathname !== "/";

  // Handle back navigation
  const handleBack = () => {
    // Get the current path segments
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    if (pathSegments.length > 1) {
      // If we're in a nested route, go up one level
      const parentPath = '/' + pathSegments.slice(0, -1).join('/');
      navigate(parentPath);
    } else {
      // If we're only one level deep, go to home
      navigate('/');
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 p-3 z-[100]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Main navigation"
      role="navigation"
    >
      <div
        className={`flex py-3 px-4 justify-between items-center relative rounded-xl transition-all duration-200 ${
          isOpen ? "bg-transparent" : "bg-neutral-950 backdrop-blur-md"
        }`}
      >
        {/* Logo/Home Link */}
        <div className="flex-1 flex justify-start">
          {showBackButton ? (
            <button
              onClick={handleBack}
              className="text-white font-mono text-sm font-medium z-[200] hover:text-neutral-400 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              back
            </button>
          ) : (
            <Link
              className="text-white font-mono text-sm font-medium z-[200]"
              to="/"
            >
              <p className="text-white font-mono text-sm font-medium z-[200]">
                kylevh.com
              </p>
            </Link>
          )}
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <p className="text-white font-mono text-sm font-medium">
            {formattedDate}
          </p>
        </div>

        {/* Desktop Navigation - Memoized since it never changes */}
        <div className="flex-1 flex justify-end">
          <DesktopNav />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu Overlay - Moved outside the navbar div */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  );
};

// Memoized desktop navigation component
const DesktopNav = memo(() => (
  <>
    <div className="hidden md:flex items-center space-x-6" role="menubar">
      <NavLink to="/">home</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  </>
));

// Reusable NavLink component
const NavLink = memo(
  ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      className="text-neutral-500 font-mono text-sm hover:text-neutral-100 transition-colors"
      to={to}
    >
      {children}
    </Link>
  )
);

// Mobile menu button component
const MobileMenuButton = memo(
  ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <motion.button
      className="md:hidden text-white hover:text-neutral-400 z-[200]"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { rotate: 90 },
        closed: { rotate: 0 },
      }}
      transition={{ duration: 0.2 }}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label="Toggle navigation menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {isOpen ? (
          // X icon when menu is open
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          // Hamburger icon when menu is closed
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
          />
        )}
      </svg>
    </motion.button>
  )
);

// Mobile menu overlay component
const MobileMenu = memo(
  ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 w-screen h-screen bg-neutral-950/90 backdrop-blur-md z-[50]"
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center space-y-8">
              {["home", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  className="text-white font-mono text-lg hover:text-neutral-200 transition-colors"
                  to={item === "home" ? "/" : `/${item}`}
                  onClick={onClose}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
);

export default memo(Navbar);
