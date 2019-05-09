import React from 'react';

//importamos el css Person.class
import './Person.css';

//import radium
import Radium from 'radium';


const person = (props) => {
  return (
    <div className="Person">
        <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children} </p>
        <input type="texto" onChange={props.changed} value={props.name  }/>
    </div>

 )
};

export default Radium(person);
