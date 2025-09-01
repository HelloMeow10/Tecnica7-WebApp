import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ImageGalleryProps {
  title: string;
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ title, images }) => {
  return (
    <Card className="card-elegant p-8 mb-16">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageGallery;
