import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from "./Components/ScrollToTop";
import './index.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import './index.css';
import ContactFormModal from "./Components/ContactFormModal";
import { ContactProvider } from "./Context/ContactContext";


function App() {
  return (
    <ContactProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Routes>

        <ContactFormModal />
        
      </HashRouter>
    </ContactProvider>

  );
}

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
