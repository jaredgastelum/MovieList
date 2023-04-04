import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Movies';

class Welcome extends React.Component {
  render() {
    return <h1>This website gives some rando numbers</h1>;
  }
}

class Conclusion extends React.Component {
  render() {
    return <p>Hope you enjoyed!</p>;
  }
}

function Rando() {
  return (
    <div>
      <h2>Random Number: {Math.random()}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <Rando />
      <br />
      <Conclusion />

      <MovieList />
    </div>
  );
}

export default App;
