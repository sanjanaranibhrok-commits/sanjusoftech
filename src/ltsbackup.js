import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Abt from "./Abt";
import Course from "./Course";
import Services from "./Services";
import Faculty from "./Faculty";
import Questions from "./Questions";
import Contactus from "./Contactus";
import LoginPage from "./LoginPage";
import Navbar from "./Navbarnew";

function App() {
  return (
    <Router>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abt" element={<Abt />} />
        <Route path="/course" element={<Course />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </Router>
  );
}

export default App;