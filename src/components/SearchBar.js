import React from 'react';

// Class Funcition
class SearchBar extends React.Component {
  // Calls when someone changes the input
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Reference the method (callback Function) */}
            {/* Without (), function is called by input later */}
            {/* Automatically called with () */}
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
