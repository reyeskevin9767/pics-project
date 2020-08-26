import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

// Class Component
class App extends React.Component {
  state = { images: [] };

  // Send request to unsplash API
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
