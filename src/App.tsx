import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './MainPage';
import Podcast from './Podcast';
// import Contact from './pages/Contact';
// import NoPage from './pages/NoPage';

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

//MAKE ROUTES FOR ALL OF THE PAGES WE NEED
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Podcast" element={<Podcast />} />
            <Route path="/Movies" element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
