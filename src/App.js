import React from 'react';
import './App.css';
import Header from './components/Header';
import Flavors from './components/Flavors';
import Map from './components/Map';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Home/>
      <Flavors />
      {/* <Map/> */}
      <Footer />
    </div>
  );
}

export default App;
