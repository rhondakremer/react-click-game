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
  }

  puppyClicked = (id) => {
    this.setState({
      puppies:this.state.puppies.map(puppy => {
        if (puppy.id === id && puppy.clicked === "false") {
          puppy.clicked = "true";
          //alert("you clicked this puppy");
          this.updateScore();
          //this.randomizeArray(puppies)
        }
        else if (puppy.id===id && puppy.clicked === "true") {
          //alert("this puppy has already been clicked")
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

  // componentDidUpdate = (prevProps) => {
  //   if (this.props.score !== prevProps.score) {
  //     this.fetchData(this.props.score);
  //     this.checkHighScore();
  //   }
  // }

  randomizeArray = (arr) => {
    return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);
  }

  checkHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score});
    }
  }

  gameOver = () => {
    // reset all puppy clicked to false and score is 0
  }
  // Map over this.state.puppies and render a PuppyCard component for each puppy object
  render() {
    return (
      
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore} />
        <CardWrapper>
        {this.state.puppies.map(puppy => (
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
    );
  }
}

export default App;
