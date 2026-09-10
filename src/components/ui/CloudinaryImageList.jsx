import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../../styles/CloudinaryImageList.css";

import { EffectCube, Pagination } from "swiper/modules";

function CloudinaryImageList({ tag }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const cloudName = "doznpzndo";

  const openPreview = (url) => {
    setPreviewUrl(url);
  };

  const closePreview = () => {
    setPreviewUrl(null);
  };

  const {
    data: images = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["cloudinary-images", tag],

    queryFn: async ({ signal }) => {
      const response = await fetch(
        `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`,
        {
          signal,
        }
      );

      if (!response.ok) {
        throw new Error("Error loading images from Cloudinary");
      }

      const data = await response.json();

      return data.resources || [];
    },

    enabled: Boolean(tag),

    // Los datos se consideran frescos durante 1 hora
    staleTime: 1000 * 60 * 60,

    // Mantener los datos en caché durante 24 horas
    gcTime: 1000 * 60 * 60 * 24,
  });

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="cloudinarySwiper"
      >
        {images.map((image, index) => {
          const imageUrl =
            `https://res.cloudinary.com/${cloudName}` +
            `/image/upload/f_auto,q_auto,dpr_auto,w_600/${image.public_id}`;

          const fullImageUrl =
            `https://res.cloudinary.com/${cloudName}` +
            `/image/upload/f_auto,q_auto,dpr_auto,w_1200/${image.public_id}`;

          return (
            <SwiperSlide key={image.public_id}>
              <img
                src={imageUrl}
                alt={image.public_id}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                onClick={() => openPreview(fullImageUrl)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {previewUrl && (
        <div className="preview-overlay" onClick={closePreview}>
          <div
            className="preview-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closePreview}
              aria-label="Close preview"
            >
              ✖
            </button>

            <img
              src={previewUrl}
              alt="Image preview"
              className="preview-img"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CloudinaryImageList;