import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Landing } from "./views/landing";
import { Login } from "./components/application/login";
import { FileUpload } from "./views/fileupload";

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}

      </Routes>
    </Router>
  );
}

export default App;

