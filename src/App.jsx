/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import TabelDignosa from "./Pages/TabelDiagnosa";
import TextGenerate from "./components/TextGenerate";
import BelanjaAlkes from "./Pages/BelanjaAlkes";

function App() {
  return (
    <Router>
      <div className="bg-slate-50 mx-auto flex ">
        <SideBar />
        <Routes>
          <Route path="/" element={<TabelDignosa />} />
          <Route path="/textgenerate" element={<TextGenerate />} />
          <Route path="/belanjaalkes" element={<BelanjaAlkes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
