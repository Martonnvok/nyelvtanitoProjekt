import './App.css';

import Layout from "./Layout.js";
import NoPage from "./pages/NoPage.js";
import Gepel from "./pages/Gepel.js";
import Rendez from "./pages/Rendez.js";
import Valaszto from "./pages/Valaszto.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
          <h1>Tanuljunk Angolul</h1>
      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Valaszto />} /> 
            <Route path="gepel" element={<Gepel />} /> 
            <Route path="rendez" element={<Rendez />} /> 
            <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter> 
        </div>
    </div>
  );
}

export default App;
