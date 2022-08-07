import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/LandingPage/SignUp';
import VideoDetail from './components/VideoDetail/VideoDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/home/:id" element={ <VideoDetail /> } />
      </Routes>
    </div>
  );
}

export default App;
