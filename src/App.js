import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Images from "./Images.json";
import "./App.css";


// math for ramdomly suffling the images
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

  // Sets the state
class App extends Component {
  state = {
    Images,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  // handles weather or not an images has been clicked, if clicked reset game
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // if clicked and not reset increase the score, and saves high score if its higher than current high score
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }

    // supposed to say you got all of them right, but i cant get it to work :(
    else if (newScore === 12) {
      this.setState({ rightWrong: "You got 12 in a row!" });
    }
    this.handleShuffle();
  };

// resets the game and shuffles images
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Game Over!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(Images);
    this.setState({ Images: shuffledImages });
  };


  // displays all components to the page
  render() {
    return (
      <Wrapper>
        <Navbar
          title="Click Game Reset"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Click each controller only one time.
        </Title>

        <Container>
          <Row>
            {this.state.Images.map(Image => (
              <Column size="md-3 sm-6">
                <Card
                  key={Image.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={Image.id}
                  image={Image.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;