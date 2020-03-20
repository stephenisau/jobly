import React, { Component } from "react";
import { debounce } from "lodash";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
    this.setState({ 
      [evt.target.name]: evt.target.value 
    });
  };

  handleSubmit = debounce((evt) => {
    evt.persist()
    const { search } = this.state;
    this.props.search(search);
  }, 500);

  render() {
    return (
      <div className="md-form mt-2">
        <form onChange={this.handleSubmit}>
          <input 
            name="search" 
            autoComplete="off"
            id="searchbar"
            value={this.state.search} 
            onChange={this.handleChange} 
            placeholder="Search Jobly here..." 
            aria-label="Search"
            type="search"/>
        </form>
      </div>
    );
  }
}

export default Search;