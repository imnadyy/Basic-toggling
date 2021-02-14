import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons: [
      {id:'w1', name: 'Rishi K. Sharma', age: 23},
      {id:'w2', name: 'Chris Daniels', age: 24},
      {id:'w3', name: 'Iftekhar Alam', age: 25}
    ],

    showPerson: false
  }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons: persons});
  }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons]; 
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

    render() {

      const style = {
        backgroundColor: 'lightgreen',
        font: 'inherit',
        border: '1px solid black',
        padding: '8px',
        cursor: 'pointer',
        borderRadius: '10px'
      }

      let persons = null; 

      if (this.state.showPerson) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age= {person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
              
          </div>
        )
      }

    return(
      <div className='App'>
        <h1>Hello, welcome to the app</h1>
        <p>Once you get name cards, click on the paragraph in the card to delete that card</p>
        <button className='btn' style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;