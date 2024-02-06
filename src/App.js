import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Landing } from "./views/landing";
import { Register } from "./views/register";
import {Login} from "./components/application/login";
import { FileFolder } from "./views/filefolder";
import { FileUpload } from "./views/fileupload";
import { GraphicsChart } from "./views/charts";
import { Calendar } from "./views/calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/register" element={<Register/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/login" element={<Login/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/filefolder" element={<FileFolder />} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}
        <Route path="/linecharts" element={<GraphicsChart />} /> {/* 👈 Renders at /app/ */}
        <Route path="/calendar" element={<Calendar />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </Router>
  );
}

export default App;

