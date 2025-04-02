import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc }: ImageModalProps) {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prevScale => Math.min(Math.max(prevScale * zoomFactor, 0.5), 3));
  };

  // Handle pinch zoom for mobile
  const handlePinch = (e: any) => {
    const newScale = Math.min(Math.max(scale * e.scale, 0.5), 3);
    setScale(newScale);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (!isDragging) {
              onClose();
            }
          }}
        >
          {/* Close button - Increased touch target for mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 text-white hover:text-neutral-300 transition-colors 
                     touch-manipulation md:p-2"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center touch-none"
            onWheel={handleWheel}
          >
            <motion.img
              src={imageSrc}
              alt="Full screen view"
              className="max-h-[90vh] max-w-[90vw] object-contain select-none"
              drag
              dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
              style={{ scale }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              whileTap={{ cursor: "grabbing" }}
            />
          </motion.div>

          {/* Zoom controls - Optimized for touch */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 md:gap-4 md:bottom-4">
            <button
              onClick={() => setScale(prev => Math.max(prev * 0.9, 0.5))}
              className="p-3 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 
                       transition-colors touch-manipulation"
              aria-label="Zoom out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-3 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 
                       transition-colors touch-manipulation"
              aria-label="Reset zoom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              </svg>
            </button>
            <button
              onClick={() => setScale(prev => Math.min(prev * 1.1, 3))}
              className="p-3 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 
                       transition-colors touch-manipulation"
              aria-label="Zoom in"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}