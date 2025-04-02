import { useState, useEffect, useCallback, useMemo, memo, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  interval?: number; // Time in milliseconds between auto-slides
  className?: string;
}

// Memoize navigation buttons to prevent unnecessary rerenders
const NavigationButton = memo(({ onClick, direction, ariaLabel }: { onClick: () => void; direction: 'left' | 'right'; ariaLabel: string }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-lg bg-white text-neutral-600 hover:bg-neutral-100 transition-colors"
    aria-label={ariaLabel}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d={direction === 'left' ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"} 
      />
    </svg>
  </button>
));
NavigationButton.displayName = 'NavigationButton';

// Memoize dot indicators
const DotIndicator = memo(({ active, onClick, ariaLabel, ariaSelected, role }: { active: boolean; onClick: () => void; ariaLabel: string; ariaSelected: boolean; role: string }) => (
  <button
    onClick={onClick}
    className={`w-2 h-2 rounded-full transition-all ${
      active ? 'bg-neutral-600/90 w-4' : 'bg-neutral-300/90 hover:bg-neutral-300'
    }`}
    aria-label={ariaLabel}
    aria-selected={ariaSelected}
    role={role}
  />
));
DotIndicator.displayName = 'DotIndicator';

export default function ImageCarousel({ 
  images, 
  interval = 5000, // Default 5 second interval
  className = "" 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState(0);

  // Memoize navigation functions
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length, isTransitioning]);

  // Memoize manual navigation handler
  const handleManualNavigation = useCallback((action: () => void) => {
    setIsAutoPlaying(false);
    action();
  }, []);

  // Memoize mouse event handlers
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'BUTTON') return;
      
      if (e.key === 'ArrowLeft') {
        handleManualNavigation(prevSlide);
      } else if (e.key === 'ArrowRight') {
        handleManualNavigation(nextSlide);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleManualNavigation, nextSlide, prevSlide]);

  // Enhanced drag gesture handlers
  const handleDragStart = useCallback((e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragStart(info.point.x);
    setIsAutoPlaying(false);
  }, []);

  const handleDrag = useCallback((e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Optional: Add visual feedback during drag
    // The motion.div will handle this automatically
  }, []);

  const handleDragEnd = useCallback((e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = info.point.x - dragStart;
    const threshold = 50; // minimum distance for swipe

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        handleManualNavigation(prevSlide);
      } else {
        handleManualNavigation(nextSlide);
      }
    }
  }, [handleManualNavigation, nextSlide, prevSlide, dragStart]);

  // Optimize autoplay effect
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1 || isModalOpen) {
      return;
    }

    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, interval, nextSlide, images.length, isModalOpen]);

  // Optimize image preloading
  useEffect(() => {
    const imagePromises = images.map(src => {
      if (loadedImages.has(src)) return Promise.resolve();
      
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(src));
          resolve(undefined);
        };
      });
    });

    Promise.all(imagePromises);
  }, [images, loadedImages]);

  // Memoize current image loaded state
  const isCurrentImageLoaded = useMemo(() => 
    loadedImages.has(images[currentIndex]),
    [loadedImages, images, currentIndex]
  );

  // Memoize image transition variants
  const imageVariants = useMemo(() => ({
    initial: { 
      opacity: 0,
      x: direction > 0 ? 100 : -100
    },
    animate: { 
      opacity: 1,
      x: 0
    },
    exit: { 
      opacity: 0,
      x: direction > 0 ? -100 : 100
    },
    transition: { 
      duration: 0.3,
      ease: "easeInOut",
      onComplete: () => setIsTransitioning(false)
    }
  }), [direction]);

  // Enhanced modal view
  const Modal = useMemo(() => isModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={() => setIsModalOpen(false)}
    >
      <motion.img
        src={images[currentIndex]}
        alt={`Full size image ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  ), [isModalOpen, images, currentIndex]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-64 md:h-96 overflow-hidden rounded-lg bg-[#ececec] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
    >
      {!isCurrentImageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          drag="x"
          dragElastic={0.3}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className="w-full h-full touch-pan-y"
          style={{ touchAction: 'pan-y' }}
        >
          <motion.img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain p-4 rounded-lg cursor-zoom-in select-none"
            {...imageVariants}
            onClick={() => setIsModalOpen(true)}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <NavigationButton 
          direction="left" 
          onClick={() => !isTransitioning && handleManualNavigation(prevSlide)}
          aria-label="Previous slide"
        />
        <NavigationButton 
          direction="right" 
          onClick={() => !isTransitioning && handleManualNavigation(nextSlide)}
          aria-label="Next slide"
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center gap-2" role="tablist">
          {images.map((_, index) => (
            <DotIndicator
              key={index}
              active={index === currentIndex}
              onClick={() => !isTransitioning && handleManualNavigation(() => setCurrentIndex(index))}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {Modal}
      </AnimatePresence>
    </div>
  );
}

