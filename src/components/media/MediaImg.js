import React, { useEffect, useState } from "react";

const MediaImg = ({ id, size = "medium" }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/${id}`)
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch((error) => console.error("Error fetching media:", error));
  }, [id]);

  if (!image || !image.media_details?.sizes?.[size]) return null;

  return (
    <img
      src={image.media_details.sizes[size].source_url}
      alt={image.alt_text || "Blog image"}
      className="blog-image"
    />
  );
};

export default MediaImg;
