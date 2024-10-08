"use client";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useState, useRef } from "react";

export default function LightBoxImage({ src, onClick }: any) {
  const [imageDimensions, setImageDimensions] = useState([]);
  const lightboxRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const img = new Image();
      img.src = src;
      await img.decode();
      setImageDimensions([
        {
          src: src,
          width: img.naturalWidth,
          height: img.naturalHeight,
        },
      ]);
    };

    loadImages();
  }, [src]);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#my-gallery",
      children: "a:not(.download-link)", // Exclude download link from triggering the lightbox
      pswpModule: () => import("photoswipe"),
      zoom: true,
    });

    lightbox.init();

    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div
      id="my-gallery"
      className="mt-20 pswp-gallery grid gap-2 grid-cols-1 items-center justify-center relative z-50">
      {imageDimensions.map((image, index) => (
        <div
          key={index}
          className="w-full flex flex-row items-start justify-between gap-10">
          <a
            href={image.src}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            className="w-full relative">
            <img
              src={image.src}
              alt=""
              className="w-full h-auto object-cover transition-transform transform hover:scale-105"
              style={{
                aspectRatio: `${image.width} / ${image.height}`,
              }}
            />
          </a>
          <div className="md:flex flex-col gap-2 hidden">
            <a
              href={image.src}
              download
              target="_blank"
              className="download-link text-center w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-md transition-colors"
              onClick={(e) => e.stopPropagation()}>
              Descargar
            </a>
            <button
              onClick={onClick}
              className="text-center w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-md transition-colors">
              Cerrar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
