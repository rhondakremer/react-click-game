import React, { Component } from "react";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper/";
import CardWrapper from "./components/CardWrapper";
import PuppyCard from "./components/Card";
import puppies from "./cards.json";
import './App.css';

class App extends Component {

  state = {
    puppies: puppies,
    score: 0,
    highScore: 0
  };

  clickEvent = (id) => {
    //alert("this is the click event");
    this.puppyClicked(id);
    this.shufflePuppies();
  }

  puppyClicked = (id) => {
    this.setState({
      puppies: puppies.map(puppy => {
        if (puppy.id === id && puppy.clicked === "false") {
          puppy.clicked = "true";
          this.updateScore();
        }
        else if (puppy.id===id && puppy.clicked === "true") {
          this.gameOver();
        }
        return puppy;
      }) 
    });
  };

  updateScore = () => {
    // set the new score
    this.setState({score: this.state.score + 1}, () =>
    this.checkHighScore());
  }

  randomizeArray = (arr) => {
    return arr.sort(() => Math.floor(Math.random() * 1000) > 500 ? 1 : -1);
  }

  checkHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score});
    }
    if (this.state.score === 12) {
      alert("You win!")
      this.restartGame();
    }
  }

  shufflePuppies = () => {
    this.setState({ puppies: this.randomizeArray(this.state.puppies)});
        console.log("Shuffling Pups");
  }

  gameOver = () => {
    // reset all puppy clicked to false and score is 0
    alert("game over, loser!")
    this.restartGame();
  }

  restartGame = () => {
    this.setState({score:0, puppies:puppies.map(puppy => puppy.clicked="false")});
  }

  // Map over this.state.puppies and render a PuppyCard component for each puppy object
  render() {
    return (
      <div>
      <Header score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          <CardWrapper>
          {puppies.map(puppy => (
            <PuppyCard
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
              clicked={puppy.clicked}
              onClick={this.clickEvent}
            />
          ))}
        </CardWrapper>
      </Wrapper>
      </div>
    );
  }
}

export default App;
