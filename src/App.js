import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Landing } from "./views/landing";
import {Login} from "./components/application/login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
