import React from 'react';
import '../App.css';

function Button(props){
    return(
        <button style = {{color: "white",backgroundColor: "green"}} onClick= {props.increaseCounter}>Click Me!!</button>
    )
}

export default Button;