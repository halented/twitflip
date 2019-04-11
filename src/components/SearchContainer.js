import React, { Component } from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchForm/>
        <SearchResults/>
      </div>
    );
  }
}

export default SearchContainer;
