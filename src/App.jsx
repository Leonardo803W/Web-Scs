import React from "react";
import SchermataHome from './components/SchermataHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchermataChiSiamo from "./components/SchermataChiSiamo";
import SchermataIscrizioni from "./components/SchermataIscrizioni";
import SchermataCollaborazioni from "./components/SchermataCollaborazioni";
import SchermataVecchiCorsi from "./components/SchermataVecchiCorsi";
import SchermataContatti from "./components/SchermataContatti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome />} />
        <Route path="/ChiSiamo" element={<SchermataChiSiamo />}/>
        <Route path="/Iscrizioni" element={<SchermataIscrizioni />}/>
        <Route path="/Collaborazioni" element={<SchermataCollaborazioni />}/>
        <Route path="/VecchiCorsi" element={<SchermataVecchiCorsi />}/>
        <Route path="/Contatti" element={<SchermataContatti />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;