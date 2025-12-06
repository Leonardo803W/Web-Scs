import React from "react";
import SchermataHome from './components/SchermataHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchermataChiSiamo from "./components/SchermataChiSiamo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome />} />
        <Route path="/ChiSiamo" element={<SchermataChiSiamo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;