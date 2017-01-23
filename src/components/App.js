import React, { Component } from 'react';
import './App.css';
import tinycolor from 'tinycolor2';
import colors from '../data/colors.js';

// style objects
const divStyle = {
  color: "#5c5c5c",
};

// tinycolor2 variables
const color = tinycolor("gold");
const format = color.getFormat();
const colorHex = color.toHexString();

console.log(color, format, color._r, colorHex);

// console.log(MyColors);

// Colors component to map over list of colors and make me some circles
const Colors = props => {
  const colors = props.colors;
  const colorCircles = colors.map((color) => {
    return (
      <svg key={color} width="100" height="100">
      <circle cx="50" cy="50" r="40" fill={color} />
      </svg>
    );
  }

  );
  return (
    <div className="named-color-set">
      {colorCircles}
    </div>
  );
}

// this is my list of colors for now.
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log('clickit!')
  }

  render() {
    return (
      <div className="App" style={divStyle}>
          <h2>Goodbye Blue Monday</h2>
          <Colors colors={colors} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
