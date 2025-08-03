"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: Props) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
      {/* Thumbnail column */}
      <div className="flex md:flex-col gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-24 h-16 md:w-full md:h-24 relative rounded-lg overflow-hidden border cursor-pointer ${
              mainImage === img ? "border-black" : "border-gray-300"
            }`}
            onClick={() => setMainImage(img)}>
            <Image
              src={img}
              alt={`${title} thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main image section */}
      <div className="w-full h-[400px] relative rounded-xl overflow-hidden">
        <Image
          src={mainImage}
          alt={`${title} main image`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
