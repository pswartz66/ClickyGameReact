import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Container from './Components/Container';
import Facecard from './Components/Facecard';
import faces from './../src/faces.json';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faces,
      score: 0,
      topScores: [0],
      maxScore: 0,
      guessedIds: [],
      status: ""
    }
  }

  componentDidMount() {
    // shuffle Facecards on initial refresh (i.e. when page is refreshed)
    this.randomizeFaces(this.state.faces);
  }

  // increases this.state.score by 1 when card is clicked
  handleIncrement = (id) => {

    if (this.state.guessedIds.includes(id)) {
      // set a variable to get the max of the topScores array
      let maximumScore = Math.max(...this.state.topScores);
      // filterTopScores to reduce size and duplicates
      let filteredTopScores = this.state.topScores.filter(num => num >= Math.max(...this.state.topScores));

      if (this.state.score >= this.state.guessedIds.length) {
      // reset score back to 0
      this.setState({ score: 0, 
                      status: "You guessed incorrectly", 
                      maxScore: maximumScore,
                      topScores: filteredTopScores,
                      guessedIds: []});
      }
    } else {

      // pushed clicked Id in the guessedIds array
      this.state.guessedIds.push(id);
      // push length of guessedIds into the topScores array
      this.state.topScores.push(this.state.guessedIds.length);
      // update the components score when clicked once
      this.setState({ score: this.state.score + 1, 
                      status: "You guessed correctly", 
                      });
      
    }
    // shuffle Facecards when card is clicked
    this.randomizeFaces(this.state.faces);
  };

  randomizeFaces = (arr) => {
    // shuffle Facecards
    arr.sort(() => 0.5 - Math.random());
    // set the faces object to the new shuffled array
    this.setState({ faces: arr })
  }

  render() {
    return (
      <div>
        <Navbar status={this.state.status} score={this.state.score} maxScore={this.state.maxScore} />
        <Header />
        <Container>
        {this.state.faces.map(face => (
          <Facecard 
            id={face.id}
            name={face.name}
            image={face.image}
            handleIncrement={this.handleIncrement}
          />)
        )}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
