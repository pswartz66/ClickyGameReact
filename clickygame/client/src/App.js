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
      guessed: false
    }
  }

  // increases this.state.score by 1
  handleIncrement = () => {
    // update the components state on each click
    this.setState({ score: this.state.score + 1 });
  };

  randomizeFaces = (arr) => {

    arr.sort(() => Math.random - 0.5);


    this.setState({ faces: arr })

    console.log(this.state.faces)
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
