import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from "./Components/ScrollToTop";
import './index.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import './index.css';


function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
