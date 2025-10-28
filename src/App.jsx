
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import TabelDignosa from "./Pages/TabelDiagnosa";
import TextGenerate from "./components/TextGenerate";
import PersiapanOperasi from "./Pages/PersiapanOperasi";
import GoogleList from "./components/GoogleList";

function App() {
  return (
    <Router>
      <div className="bg-slate-50 mx-auto flex ">
        <SideBar />
        <Routes>
          <Route path="/" element={<TabelDignosa />} />
          <Route path="/textgenerate" element={<TextGenerate />} />
          <Route path="/persiapanoperasi" element={<PersiapanOperasi />} />
          <Route path="/GoogleList" element={<GoogleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
