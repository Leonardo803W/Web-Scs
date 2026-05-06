import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/globalComponents/ScrollToTop";
import MainLayout from "./components/globalComponents/MainLayout";
import Home from "./components/componentsSection/Home";
import ChiSiamo from "./components/componentsSection/ChiSiamo";
import IscrizioniSection1 from "./components/componentsSection/IscrizioniSection1";
import CollaborazioniSection1 from "./components/componentsSection/CollaborazioniSection1";
import VecchiCorsiSection1 from "./components/componentsSection/VecchiCorsiSection1";
import ContattiSection1 from "./components/componentsSection/ContattiSection1";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Iscrizioni" element={<IscrizioniSection1 />} />
          <Route path="/Collaborazioni" element={<CollaborazioniSection1 />} />
          <Route path="/VecchiCorsi" element={<VecchiCorsiSection1 />} />
          <Route path="/Contatti" element={<ContattiSection1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;