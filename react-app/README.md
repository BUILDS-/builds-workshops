# Learn React Workshop

## What is ReactJS?

React is an open-source Javascript library that is used for building UI, specifically for handling the view layer for web and mobile apps. React is great for creating reusuble UI compoenents. 

### JSX 
React uses JSX, which is Javascript that allows using HTML tag syntax.

### Components
Components let you divide the UI into smaller, reusuable pieces. They are like Javascript functions, where they accept any inputs (props) and return React elements.
```
import React from 'react'; 

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```
### Class Componenets vs Function Componenets

In the last year, React has moved towards function componenets rather than class components. Both of the following components are equivelent in React's point of view. However, React as moving towards function components so we will use them in this tutorial.
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


## Props and State

React Official Documenation:

"props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a fun"

https://github.com/uberVU/react-guide/blob/master/props-vs-state.md 


## 1. Ensure you have Node.js

```
node -v
npm -v
```

If your computer doesn't have either, install node.js:
https://nodejs.org/en/ 

## 2. Create React App
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
```
npx create-react-app my-app
cd my-app
npm start
```

Note: the first command may take a while to execute

### Anatomy of the Create React App:

index.js: the entrypoint to the application, which calls the "App" component. 
App.js: Creates the "App" component and exports it 
App.css: Main css file for application

## 3. Make a Button!

1. In the src file, create a Componenets folder. This is where we will add files defining components. 
2. In the Components folder, create a file called Button.js (all component files have to be capitilized)
3. Every component should have the following import:
```
import React from 'react';
```
4. Create a function Button and export it

Button.js
```
import React from 'react';

function Button(props){

}

export default Button;
```
5. Return a button HTML element (html tags are lowercase while components are capitlized) 

Button.js
```
import React from 'react';

function Button(props){
    return(
        <button>Click Me!!</button>
    )
}

export default Button;
```
6. Update App.js to render the Button

App.js
```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'

function App() {
  return (
    <div className="App">
      <Button/>
    </div>
  );
}

export default App;
```
## 4. Make a Counter attached to the Button!

## 5. Styling in React

