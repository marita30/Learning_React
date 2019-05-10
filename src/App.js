import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';

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

   render() {


     let persons = null;
     let btnClass = '';

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
//Creando variable para las dise;os de css en el archivo App.css, importamos la clase que esta en el archivo css classes.red
       btnClass = classes.Red


     }
//Creando classes para diseno.
     const assignedClasses = [];
     if (this.state.persons.length <= 1){
       assignedClasses.push(classes.red);
     }
     if (this.state.persons.legth <= 0){
       assignedClasses.push(classes.bold);
     }
     return (

       <div className={classes.App}>
          <h1> Hi, I'm a React App </h1>
          <p className={assignedClasses.join(' ')}> This is really working!!</p>
          <button className= {btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
       </div>

     );

  // return React.createElement('div',{ className: 'App'}, null, React.createElement('h1', null, 'Hi, I\'m React App') );
   }
}

export default App;
