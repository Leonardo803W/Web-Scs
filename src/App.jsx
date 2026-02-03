import React from "react";
import SchermataHome from './components/schermate/SchermataHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchermataChiSiamo from "./components/schermate/SchermataChiSiamo";
import SchermataIscrizioni from "./components/schermate/SchermataIscrizioni";
import SchermataCollaborazioni from "./components/schermate/SchermataCollaborazioni";
import SchermataVecchiCorsi from "./components/schermate/SchermataVecchiCorsi";
import SchermataContatti from "./components/schermate/SchermataContatti";

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