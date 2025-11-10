import "./App.css";


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen';
// import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;