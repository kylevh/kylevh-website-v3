import { motion } from "framer-motion";

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={`bg-white rounded-xl gap-4 w-full max-h-52 p-4 flex flex-col 
      items-start justify-between text-neutral-950 font-mono text-sm font-medium ${className}`}
      variants={cardVariants}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
    >
      {children}
    </motion.div>
  );
}
