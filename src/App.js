import './App.css';
import PlantContainer from './PlantContainer'
import React from 'react'

class App extends React.Component {
  
  state = { //always equal to object
    displayPlants: false
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showPlants} >View Plants</button>
            {this.state.displayPlants && < PlantContainer /> } 
        </header>
      </div>
    );}

  showPlants = () => { //used in an event listener, so arrow function
    this.setState({
      displayPlants: true
    })
  }

}

export default App;
