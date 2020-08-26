import React from 'react';

// Class Component
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // Direct access to a single DOM Element
    // Assign to instance variable and pass to a JSX element as props
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Get the image height after the page has load
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // Find how many spans each image takes
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = height + 10;

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
