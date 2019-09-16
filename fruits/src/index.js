// React
import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Components
import { Header } from './components/Header';
import { Fruit } from './components/Fruit';
import { DeleteAll } from './components/DeleteAll';
import { ResetAll } from './components/ResetAll';
import { Footer } from './components/Footer';

//Miscellaneous
import { fruitData } from './fruitData';
import './css/main.css';

// Main App. Get individual fruits from our fruitData array and pass down as props to
// our Fruit component.
// When passing props down to our Fruit component we are also passing down
// a function to the Fruit component to get to the delete button component.
// Because our fruitData is what may change, we put this in our state.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { fruitData: fruitData };
  }

  // Delete Button. Delete a chosen fruit.
  handleClick = index => {
    let fruitDataCopy = [...this.state.fruitData];
    fruitDataCopy.splice(index, 1);
    this.setState({ fruitData: fruitDataCopy });
  };

  // Reset Button. Puts back our original fruits
  reset = () => {
    this.setState({ fruitData: fruitData });
  };

  // Delete All Button. Kills all the fruit components from the DOM.
  deleteAll = () => {
    let fruitDataCopy = [...this.state.fruitData];
    fruitDataCopy = [];
    this.setState({ fruitData: fruitDataCopy });
  };

  // Loop around our fruits array(fruitData) and render individual fruit components
  render() {
    const fruitItems = this.state.fruitData.map((fruit, index) => (
      <Fruit
        colour={fruit.colour}
        key={fruit.id}
        name={fruit.name}
        fruit={fruit.fruit}
        id={fruit.id}
        handleClick={this.handleClick.bind(this, index)}
      />
    ));

    return (
      <div className="container">
        <Header />
        <div className="buttons">
          <DeleteAll deleteAll={this.deleteAll.bind(this)} />
          <ResetAll reset={this.reset.bind(this)} />
        </div>
        {fruitItems}
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
