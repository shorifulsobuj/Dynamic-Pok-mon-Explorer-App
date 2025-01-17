import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./pages/Pokemon"; // import Pokemon.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemon />} /> {/* Set the Pokemon page as default */}
      </Routes>
    </Router>
  );
}

export default App;
