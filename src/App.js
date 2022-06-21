import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Tvshows from './Components/TVShows/Tvshows';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import Movies from './Components/Movies/Movies';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
// import 

function App() {
  const [titleShown, setTitleShown] = useState("movie");

  const changeTitleShown = (title)=>{
    if (title === "movie") {
      return setTitleShown("movie")
    }
    else if (title === "tv") {
      return setTitleShown("tv")
    }
  }
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
