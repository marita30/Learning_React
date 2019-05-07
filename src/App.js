import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Agregando la function Person
import Person from './Person/Person.js';

 class App extends Component {
   state = {
     persons: [

       { name: 'Maria Jose', age: 22 },
       { name: 'Cristopher Palacios', age: 23}
     ]
   }
   render(){
     return (
       <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p> This is really working!!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Playing Soccer </Person>
       </div>
     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default App;
