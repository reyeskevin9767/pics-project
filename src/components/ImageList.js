import React from 'react';

const ImageList = (props) => {
  // Map Method - Iterate over an array ->
  // Modify orginal values -> Place into a new array
  const images = props.images.map(({ description, id, urls }) => {
    // Root element needs a key for better performance
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
