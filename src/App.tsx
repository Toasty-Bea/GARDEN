////import { useState } from 'react'
////import reactLogo from './assets/react.svg'
////import './App.css'

////function App() {
////  const [count, setCount] = useState(0)

////  return (
////    <div className="App">
////      <div>
////        <a href="https://vitejs.dev" target="_blank">
////          <img src="/vite.svg" className="logo" alt="Vite logo" />
////        </a>
////        <a href="https://reactjs.org" target="_blank">
////          <img src={reactLogo} className="logo react" alt="React logo" />
////        </a>
////      </div>
////      <h1>Vite + React</h1>
////      <div className="card">
////        <button onClick={() => setCount((count) => count + 1)}>
////          count is {count}
////        </button>
////        <p>
////          Edit <code>src/App.tsx</code> and save to test HMR
////        </p>
////      </div>
////      <p className="read-the-docs">
////        Click on the Vite and React logos to learn more
////      </p>
////    </div>
////  )
////}
//import "./App.css";
import React from 'react';
import './App.css';// ¤Þ¤J CSS ÀÉ®×
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
//import YellowDock from './assets/image/Yellow Dock.png';


const App = () => {

    return (
        <>
            <div className="App"></div>
            <Router>
               <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Menu" element={<Menu />} />
                </Routes>
                <Footer />
                </Router>
        </>
    );
    
}

export default App
