import React, { Component } from "react";

class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    }
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      this.setState((currState) => ({
        suggestions: [],
      }));
    } else {
      const regex = new RegExp(`^${value}`, 'i');
      const suggestions = this.items.sort().filter(v => v.test(regex));
      this.setState(() => ({ suggestions }));
    }
  }
  render() {
    return (
      <div> AutoCompleteText</div>
    );
  }
}

export default AutoCompleteText;