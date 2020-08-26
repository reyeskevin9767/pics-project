import React from 'react';

// Class Component
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    // Direct access to a single DOM Element
    // Assign to instance variable and pass to a JSX element as props
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Get the image height after the page has load
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
