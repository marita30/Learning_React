import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';

// Agregando la function Person
import Persons  from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit.js';



 class App extends Component {

   //creando un componenete llamado Lifecycle
   constructor (props) {
     super(props);
     console.log('[App.js] constructor');

   }
   //agregando los parametros de Person , name y age en un arreglo.
   state = {
     persons: [

       {id: '1', name: 'Maria Jose', age: 22 },
       { id: '2', name: 'Cristopher Palacios', age: 23}
     ],
     otherState: 'Some other value',
     showPersons: false,
     //botton del return.
     showCockpit: true
   }
static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

// componentWillMount() {
// console.log('[App.js] componentWillMount');
// }

componentDidMount() {
  console.log('[App.js]componentDidMount');
}

componentDidUpdate() {
  console.log('[App.js]componentDidUpdate');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('[App.js]shouldComponentUpdate');
  return true;
}



//function for input
 nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });
//nuevo objeto para la matriz nueva para no erjudicar la matriz anterior (copia de la amtriz original).
   const person = {
     ...this.state.persons[personIndex]
   };
//enfoque alternativo
   // const person = Object.assign({}, this.state.persons[personIndex]);
// actualizo el nombre de la persona
  person.name = event.target.value;
//copias de la matriz original
  const persons = [...this.state.persons];
  persons[personIndex] = person;
//Actualizar la matriz de personIndex
   this.setState( { persons: persons} )
   }
   //metodo de eliminar persons
   deletePersonHandler = (personIndex) => {
     // const persons = this.state.persons;
     const persons = [...this.state.persons];
     persons.splice(personIndex, 1);
     this.setState({persons: persons})
   }
//Fuction para ocultar o mostrar las personas en el button
togglePersonsHandler = () => {
 const doesShow = this.state.showPersons;
 this.setState({showPersons: !doesShow});
}

   render() {
     console.log('[App.js] render');
     let persons = null;

     if ( this.state.showPersons ) {
       persons = <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} />;
     }

     return (
       <div className={classes.App}>
       <button
       onClick={() => {
        this.setState({ showCockpit: false });
      }}
       > Remove Cockpit</button>
      {this.state.showCockpit ? <Cockpit
       title={this.props.appTitle}
       showPersons={this.state.showPersons}
       personsLength={this.state.persons.length}
       clicked={this.togglePersonsHandler}
       /> : null}
          {persons}
       </div>
     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default App;
