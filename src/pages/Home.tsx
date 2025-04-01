import { motion } from "framer-motion";
import Card from "../components/Card/Card";
import { Link } from "react-router";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="flex-1 w-full max-w-5xl h-full grid gap-3 p-3 grid-cols-1 md:grid-cols-4 md:place-content-center "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* First row - middle two columns */}
      <Card className="md:col-start-2">
        <p>kyle huynh</p>
        <p className="text-neutral-400 ">software developer</p>
      </Card>

      <Card>
        <p>about</p>
        <p className="text-neutral-400 ">
          lorem ipsum dolor sit amet consectetur adipisicing elit. porro itaque
          eum delectus unde architecto reprehenderit
        </p>
        <p>seattle, wa</p>
      </Card>

      {/* Second row - 3 cards spread across */}
      <Card className="md:col-start-1 md:col-span-2">
        <p>projects</p>
        <Link to="/projects" className="flex w-full">
          <button className="bg-neutral-950 flex-1 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors">
            view
          </button>
        </Link>
      </Card>

      <Card>
        <p>blog</p>
        <Link to="/blog" className="flex w-full">
          <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
            read
          </button>
        </Link>
      </Card>

      <Card className="md:col-span-1">
        <p>contact</p>
        <div className="flex w-full gap-2">
          <Link to="mailto:kylevh@gmail.com" className="flex w-full">
            <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
              e-mail
            </button>
          </Link>
          <Link to="https://github.com/kylevh" className="flex w-full">
            <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
              github
            </button>
          </Link>
        </div>
      </Card>

      {/* Third row - second column */}
      <Card className="md:col-start-2">
        <p>work</p>
        <div className="flex w-full gap-2">
          <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
            view
          </button>
        </div>
      </Card>
    </motion.section>
  );
};

export default Home;
