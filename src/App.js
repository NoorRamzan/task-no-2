import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./services";
import About from "./about";
import Service2 from "./service2";
import Service3 from './service3'
import Partners from './partners';
import Footer from "./footer";


function App() {
  return (
    <div className="App">
      <Navbar />
    <Hero/>
    <Services/>
    <About/>
    <Service2/>
    <Service3/>
    <Partners/>
    <Footer/>
    </div>
  );
}

export default App;
