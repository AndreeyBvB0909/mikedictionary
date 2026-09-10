import React, { useEffect, useState } from 'react';

function CloudinaryImageList({ tag }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cloudName = 'doznpzndo';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`
        );

        if (!response.ok) {
          throw new Error('Error loading images from Cloudinary');
        }

        const data = await response.json();

        setImages(data.resources || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (tag) {
      fetchImages();
    }
  }, [tag]);

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.public_id}
          src={`https://res.cloudinary.com/${cloudName}/image/upload/${image.public_id}`}
          alt={image.public_id}
        />
      ))}
    </div>
  );
}

export default CloudinaryImageList;