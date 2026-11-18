// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./Header";
// import Homepage from "./Homepage";
// import Courses from "./Courses";
// import About1 from "./About1";
// import FAQ from "./FAQ";
// import Contact from "./Contact";
// import Login from "./Login";

// function App() {
//   return (
//     <BrowserRouter>

//       <Header />

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/about" element={<About1 />} />
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";
import Courses from "./Courses";
import About from "./About";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Login from "./Login";
import Students from "./Students";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/about" element={<About />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/students" element={<Students />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;