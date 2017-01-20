import React, { Component } from 'react';
import './App.css';
import tinycolor from 'tinycolor2';

// style objects
const divStyle = {
  color: "#5c5c5c",
};

// tinycolor2 variables
const color = tinycolor("gold");
const format = color.getFormat();
const colorHex = color.toHexString();

console.log(color, format, color._r, colorHex);



// class Colors extends Component {
//   render() {
//     return (
//       <svg width="50" height="50">
//         <circle cx="25" cy="25" r="25" fill="gold" />
//       </svg>
//     )
//   }
// }

const Colors = props => {
  const colors = props.colors;
  const colorCircles = colors.map((color) => {
    return (
      <svg key={color} width="50" height="50">
      <circle cx="25" cy="25" r="25" fill="gold" />
      </svg>
    );
  }

  );
  return (
    <div>
      {colorCircles}
    </div>
  );
}


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


class App extends Component {
  render() {
    return (
      <div className="App" style={divStyle}>
          <h2>Goodbye Blue Monday</h2>
          <Colors colors={colors} />
      </div>
    );
  }
}

export default App;
