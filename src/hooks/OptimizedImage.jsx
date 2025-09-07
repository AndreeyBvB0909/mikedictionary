import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

// Configuración de Cloudinary
const cld = new Cloudinary({
  cloud: {
    cloudName: "doznpzndo", // 👈 tu cloud_name
  },
});

const OptimizedImage = ({ publicId, width = 250, height = 500 }) => {
  const img = cld.image(publicId);
  img.resize(fill().width(width).height(height)).format("auto").quality("auto");

  return <AdvancedImage cldImg={img} />;
};

export default OptimizedImage;
