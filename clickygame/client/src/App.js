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
      faces
    }
  }

  
  render() {

    return (
      <div>
        <Navbar />
        <Header />
        <Container>

        {this.state.faces.map(face => (
          
          <Facecard 
            id={face.id}
            name={face.name}
            image={face.image}
          
          />)
        )}
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
