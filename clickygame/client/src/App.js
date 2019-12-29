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
      topScore: 0,
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

      // add logic explaining that game has ended

    } else {

      // pushed clicked Id in the guessedIds array
      this.state.guessedIds.push(id);
      console.log(this.state.guessedIds);

      // update the components score when clicked once
      this.setState({ score: this.state.score + 1 });

    }


    // shuffle Facecards when card is clicked
    this.randomizeFaces(this.state.faces);
    

  };

  randomizeFaces = (arr) => {
    // shuffle Facecards
    arr.sort(() => 0.5 - Math.random());

    // set the faces object to the new shuffled array
    this.setState({ faces: arr })

    // console.log(this.state.faces)
  }


  
  render() {

    return (
      <div>
        <Navbar score={this.state.score} />
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
