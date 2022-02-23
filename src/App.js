import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-react" element={<Home />} />
        {<Route path="/portfolio" element={<Portfolio />} />}
        {<Route path="/about" element={<About />} />}
        {<Route path="/contact" element={<Contact />} />}
        <Route
          path="*"
          element={
            <h1 className="text-center pt-5 mt-5 ">Woops page not found</h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
