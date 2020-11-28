import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input placeholder="Search DailySmarty" />
      </form>
    );
  }
}

searchBar = reduxForm({
  form: 'searchBar'
})(searchBar);
export default SearchBar;
