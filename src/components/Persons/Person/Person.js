import React, { Component } from 'react';

//importamos el css Person.class
import classes from './Person.css';

class Person extends Component {
  render() {
      console.log('[Person.js] rendering...');
      return (
        <div className={classes.Person}>
            <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children} </p>
            <input
            type="texto"
            onChange={this.props.changed}
            value={this.props.name  }/>
        </div>
     );
  }
}

export default Person;
