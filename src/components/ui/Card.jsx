import React from "react";
import OptimizedImage from "../../hooks/OptimizedImage";

export const Card = ({ url }) => {
  const publicId = url.split("/").pop().split(".")[0];

  return (
    <div>
      <OptimizedImage publicId={publicId} width={250} height={500} />
    </div>
  );
};



