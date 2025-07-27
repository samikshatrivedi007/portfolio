import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from "./components/Contact";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero/>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
