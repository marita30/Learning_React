import React from 'react';

//importamos el css Person.class
import classes from './Person.css';

const person = (props) => {

  const rnd = Math.random ();

  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }

  return (
    <div className={classes.Person}>
        <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children} </p>
        <input type="texto" onChange={props.changed} value={props.name  }/>
    </div>
 )
};

export default person;
