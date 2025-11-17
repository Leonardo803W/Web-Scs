import React from "react";
import SchermataHome from './components/SchermataHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;