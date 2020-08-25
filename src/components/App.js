import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// Class Component
class App extends React.Component {
  // Send request to unsplash API
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: process.env.REACT_APP_CLIENT_ID,
      },
    });
  }

  render() {
    return (
      <div className=" ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
