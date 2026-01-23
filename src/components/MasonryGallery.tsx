import React, { useState, useEffect } from "react";

interface MasonryGalleryProps {
  images: string[];
  title: string;
  alt?: string;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  title,
  alt = "Gallery image",
}) => {
  const [imageDimensions, setImageDimensions] = useState<{
    [key: number]: { width: number; height: number };
  }>({});

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: { [key: number]: { width: number; height: number } } =
        {};

      await Promise.all(
        images.map(
          (src, idx) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                dimensions[idx] = {
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                };
                resolve(null);
              };
              img.onerror = () => {
                dimensions[idx] = { width: 1, height: 1 };
                resolve(null);
              };
              img.src = src;
            }),
        ),
      );

      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, [images]);

  // Sort images by aspect ratio to create a more balanced layout
  const sortedIndices = images
    .map((_, idx) => idx)
    .sort((a, b) => {
      const aspectA =
        imageDimensions[a]?.width / imageDimensions[a]?.height || 1;
      const aspectB =
        imageDimensions[b]?.width / imageDimensions[b]?.height || 1;
      return aspectB - aspectA; // Sort by aspect ratio descending
    });

  return (
    <div className="masonry-gallery">
      <style>{`
        .masonry-gallery {
          column-count: 1;
          column-gap: 2rem;
        }

        @media (min-width: 768px) {
          .masonry-gallery {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-gallery {
            column-count: 2;
          }
        }

        .masonry-gallery img {
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: 2rem;
          break-inside: avoid;
          border-radius: 0.5rem;
          object-fit: contain;
        }
      `}</style>

      {sortedIndices.map((idx) => (
        <img
          key={idx}
          src={images[idx]}
          alt={`${title} ${idx + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default MasonryGallery;
