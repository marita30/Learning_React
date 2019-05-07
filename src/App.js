import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Agregando la function Person
import Person from './Person/Person.js';

 class App extends Component {
   //agregando los parametros de Person , name y age en un arreglo.
   state = {
     persons: [

       { name: 'Maria Jose', age: 22 },
       { name: 'Cristopher Palacios', age: 23}
     ],
     otherState: 'Some other value'
   }
//Agregando valor al botton
   switchNameHandler = (newName) => {
  // console.log('Was clicked!');
     this.setState( {
       persons: [
      { name: newName, age: 22},
      { name: 'C.Palacios', age: 23}
     ]
    } )
   }
//function for input
   nameChangedHandler = (event) => {
     this.setState( {
       persons: [
      { name: 'Maria Jose', age: 22},
      { name: event.target.value, age: 23}
     ]
    } )
   }

   render(){
     return (
       <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p> This is really working!!</p>
        <button onClick={() =>this.switchNameHandler('M.J')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}> My Hobbies: Playing Soccer </Person>
       </div>
     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default App;
