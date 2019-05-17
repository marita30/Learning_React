import React, { useEffect } from "react";
import classes from './Cockpit.css';

const cockpit = (props) => {

  //Creando classes para diseno.
       const assignedClasses = [];
       let btnClass = '';
       if (props.showPersons) {

         //Creando variable para las dise;os de css en el archivo App.css, importamos la clase que esta en el archivo css classes.red
                btnClass = classes.Red;
       }

       if (props.persons.length <= 1){
         assignedClasses.push(classes.red);
       }
       if (props.persons.legth <= 0){
         assignedClasses.push(classes.bold);
       }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title}</h1>
      <p className={assignedClasses.join(' ')}> This is really working!!</p>
      <button
      className= {btnClass}
      onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
