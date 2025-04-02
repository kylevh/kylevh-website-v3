import { motion } from "framer-motion";

export default function Error() {
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
          <div className="col-span-4 md:col-start-2 md:col-span-2 min-h-48 flex flex-col items-center justify-center bg-white rounded-xl gap-4 w-full max-h-52 p-4">
              <p className="text-neutral-400">Page not found :\</p>
          </div>
      </motion.section>
    );
  }