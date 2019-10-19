import React, { PureComponent } from 'react';

// Button class component accepting props from our Fruit component.App.
// Here we set up state for the colour of the button.
// We set up binding for our click handler.
export class ColourButton extends PureComponent {
  state = { colour: this.props.colour, textColour: '' };

  //This function returns a random number
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  }

  // The click handler calls our random number generator which will give us
  // our random colour to change the state with setState.
  handleClick = () => {
    const coloursArr = [
      '#e5ccff',
      '#660000',
      '#ff0000',
      '#ff8000',
      '#ffb266',
      '#b2ff66',
      '#ff66b2',
      '#c0c0c0',
      '#404040',
      '#ff007f',
      '#3399ff',
      '#006600',
      '#cccc00'
    ];

    const textColoursArr = [
      '#181817',
      '#e0e0d9',
      '#e0e0d9',
      '#181817',
      '#181817',
      '#181817',
      '#181817',
      '#181817',
      '#e0e0d9',
      '#e0e0d9',
      '#181817',
      '#e0e0d9',
      '#181817'
    ];

    let result = this.getRandomIntInclusive(0, 12);
    this.setState(() => ({
      colour: coloursArr[result],
      textColour: textColoursArr[result]
    }));
  };

  render() {
    return (
      <button
        className="colourButton"
        onClick={this.handleClick}
        style={{
          backgroundColor: this.state.colour,
          color: this.state.textColour
        }}
      >
        {this.props.name}
      </button>
    );
  }
}
