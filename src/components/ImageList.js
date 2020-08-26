import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // Map Method - Iterate over an array ->
  // Modify orginal values -> Place into a new array
  const images = props.images.map((image) => {
    // Root element needs a key for better performance
    return <ImageCard key={image.id} image={image}/>;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
