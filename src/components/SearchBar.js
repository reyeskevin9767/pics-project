import React from 'react';

// Class Funcition
class SearchBar extends React.Component {
  state = { term: '' };

  // Calls when someone changes the input
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  // Prevent the broswer from refreshing
  onFormSubmit = (event) => {
    event.preventDefault();
  };

  // onChange and onSubmit -> Event Handlers
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Reference the method (callback Function) */}
            {/* Without (), function is called by input later */}
            {/* Automatically called with () */}
            <input
              type="text"
              // Cotrolled Element - React stores data from DOM instead of getting it from DOM
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
