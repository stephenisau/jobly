import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ 
      [evt.target.name]: evt.target.value 
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    await this.props.search(this.state.search);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="search" 
            value={this.state.search} 
            onChange={this.handleChange} 
            placeholder="Search" 
            aria-label="Search"
            type="search"/>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;