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
     otherState: 'Some other value',
     showPersons: false
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

//Fuction para ocultar o mostrar las personas en el button
togglePersonsHandler = () => {
 const doesShow = this.state.showPersons;
 this.setState({showPersons: !doesShow});
}

   render(){
     //Dandole estilo con javascript al botton.
     const style = {
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
     };

     let persons = null;

     if ( this.state.showPersons ) {
       persons = (
         <div>
            {this.state.persons.map(person => {
              return <Person name={person.name} age={person.age}/>
            })}
         </div>
       );
     }

     return (
       <div className="App">
          <h1> Hi, I'm a React App </h1>
          <p> This is really working!!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
       </div>
     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default App;
