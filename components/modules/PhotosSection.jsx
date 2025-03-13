import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "@/constant/images";

const PhotosSection = () => {
  return (
    <section className="gallery">
      <div className="container container-lg gallery-flex">
        {images.map((image) => (
          <div className="gallery-item">
            <Link href={`/images/${image.title}.jpg`}>
              <Image
                src={image.src}
                width={380}
                height={380}
                alt={image.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotosSection;
