import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Landing } from "./views/landing";
import { FileUpload } from "./views/fileupload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* 👈 Renders at /app/ */}
        <Route path="/fileupload" element={<FileUpload />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;