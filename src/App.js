import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obfustication: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target)
    this.setState({
      obfustication: e.target.value,
    });
  }
  

  render() {
    return (
      <div>
        Your Message :
        <input
          type="text"
          value={this.state.obfustication}
          onChange={this.handleChange}
        />
        <br />
       Your Obfusticated Message : {this.state.obfustication}
      </div>
    );
  }
}

export default App;
