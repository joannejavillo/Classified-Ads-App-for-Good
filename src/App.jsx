/*import React from 'react'; */
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <Footer />
    </div>
  );
};

export default App;




/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css' 


function App() {
  //const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello World!
    </h1>
  )
}

export default App
*/