import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                            Your Name
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            About
                        </Link>
                        <Link to="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Projects
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar