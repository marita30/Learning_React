import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Agregando la function Person
import Person from './Person/Person.js';

 class App extends Component {
   render(){
     return (
       <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p> This is really working!!</p>
        <Person name="Maria Jose" age="22" />
        <Person name="Cristopher Palacios" age="23" > My Hobbies: Playing Soccer </Person>
       </div>
     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default App;
