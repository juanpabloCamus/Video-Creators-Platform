import React from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import CreateVideo from './components/CreateVideo/CreateVideo';
import EditVideo from './components/CreateVideo/EditVideo';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/LandingPage/SignUp';
import Profile from './components/Profile/Profile';
import VideoDetail from './components/VideoDetail/VideoDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/home/:id" element={ <VideoDetail /> } />
        <Route path="/edit/:id" element={ <EditVideo /> } />
        <Route path="/create/:id" element={ <CreateVideo /> } />
        <Route path="/profile/:id" element={ <Profile /> } />
      </Routes>
    </div>
  );
}

export default App;
