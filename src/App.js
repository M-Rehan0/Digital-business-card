import React from 'react';
import Intro from './components/Intro';
import Info from './components/Info';
import Footer from './components/Footer';
import './style.css'; 

function App() {
  return (
    <div id="main">
      <Intro /> 
      <Info /> 
      <Footer />
    </div>
  );
}

export default App;