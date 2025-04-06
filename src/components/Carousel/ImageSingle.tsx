import { memo } from 'react';

interface SingleImageProps {
  image: string;
  className?: string;
  doubleColumn?: boolean;
}

const SingleImage = memo(({ image, className = "", doubleColumn = false }: SingleImageProps) => {
  return (
    <div 
      className={`relative w-full h-64 md:h-96 overflow-hidden rounded-lg bg-[#ececec] ${
        doubleColumn ? 'md:col-span-2' : ''
      } ${className}`}
    >
      <img
        src={image}
        alt="Display image"
        className="w-full h-full object-contain p-4 rounded-lg"
      />
    </div>
  );
});

SingleImage.displayName = 'SingleImage';

export default SingleImage;
