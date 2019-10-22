import React, { Component } from "react";
import Wrapper from "./components/Wrapper/";
import PuppyCard from "./components/Card";
import puppies from "./cards.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    puppies
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.puppies.map(friend => (
          <PuppyCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
