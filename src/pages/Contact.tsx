import { motion } from "framer-motion";
import Card from "../components/Card/Card";
import { Link } from "react-router";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const Contact = () => {
  useDocumentTitle("kyle huynh | contact");
  
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
      className="flex-1 w-full max-w-5xl grid gap-3 p-3 grid-cols-1 md:grid-cols-4 md:place-content-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className=" md:col-start-2 md:col-span-2 max-h-42">
        <p>contact</p>
        <p className="text-neutral-500">
          feel free to reach out for collaborations, opportunities, or just to say hello
        </p>
        <Link to="mailto:kylevh@outlook.com" className="flex w-full">
          <button className="bg-neutral-950 flex-1 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors">
            email
          </button>
        </Link>
      </Card>
    </motion.section>
  );
};

export default Contact;