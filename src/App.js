import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import radium para class
import Radium from 'radium';
// Agregando la function Person
import Person from './Person/Person.js';

 class App extends Component {
   //agregando los parametros de Person , name y age en un arreglo.
   state = {
     persons: [

       {id: '1', name: 'Maria Jose', age: 22 },
       { id: '2', name: 'Cristopher Palacios', age: 23}
     ],
     otherState: 'Some other value',
     showPersons: false
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

  person.name = event.target.value;

  //Actualizar la matriz de personIndex (copias de la matriz original)
  const persons = [...this.state.persons];
  persons[personIndex] = person;



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

   render(){
     //Dandole estilo con javascript al botton.
     const style = {
       backgroundColor: 'green',
       color: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer',
       ':hover': {
         backgroundColor: 'lightgreen',
         color: 'black'
       }
     };

     let persons = null;

     if ( this.state.showPersons ) {
       persons = (
         <div>
            {this.state.persons.map((person, index) => {
              return <Person
               click={() => this.deletePersonHandler(index)}
               name={person.name}
               age={person.age}
               key={person.id}
               changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
         </div>
       );
//Cambiandole el color al boton cuado ya demuestre los nombres que se ponga en rojo.
       style.backgroundColor = 'red';
       style[':hover'] = {
         backgroundColor: 'salmon',
         color: 'black'
       };
     }
//Creando classes para diseno.
     const classes  =[];
     if (this.state.persons.length <= 1){
       classes.push('red');
     }
     if (this.state.persons.legth <= 0){
       classes.push('bold')
     }
     return (
       <div className="App">
          <h1> Hi, I'm a React App </h1>
          <p className={classes.join(' ')}> This is really working!!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
       </div>
     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default Radium(App);
