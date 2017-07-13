import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <select id="dishtypeFilter" onChange={this.handleFilterTextInputChange}>
        <option defaultValue value="">Select Cuisine</option>
        <option value="american">American</option>
        <option value="indian">Indian</option>
        <option value="italian">Italian</option>
      </select>
    );
  }
}

export default SearchBar;
