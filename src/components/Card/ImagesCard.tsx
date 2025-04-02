import ImageCarousel from "../Carousel/ImageCarousel";
import Card from "./Card";

export default function ImagesCard({ images }: { images: string[] }) {
  return (
    <Card
      className="md:col-span-2 max-h-fit !p-0 !bg-transparent"
      whileHover={{
        scale: 1.0,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      <ImageCarousel images={images} />
    </Card>
  );
}
