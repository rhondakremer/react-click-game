import React, { Component } from "react";
import Wrapper from "./components/Wrapper/";
import PuppyCard from "./components/Card";
import puppies from "./cards.json";
import './App.css';

class App extends Component {

  state = {
    puppies,
    score: 0,
    highScore: 0
  };

  clickEvent = (id, clicked) => {
    this.setState({
      puppies:this.state.puppies.map(puppy => {
        if (puppy.id===id) {
          puppy.clicked = true;
        }
        return puppy;
      })
    })
    alert("you are clicked!" + id + clicked);
  };

  // Map over this.state.puppies and render a PuppyCard component for each puppy object
  render() {
    return (
      <Wrapper>
        {this.state.puppies.map(puppy => (
          <PuppyCard
            id={puppy.id}
            key={puppy.id}
            image={puppy.image}
            clicked={puppy.clicked}
            onClick={this.clickEvent}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
