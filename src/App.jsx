import { Routes, Route, useNavigate } from "react-router-dom";
import Season from "./components/Season";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Lips from "./pages/Lips";
import Palettes from "./pages/Palettes";
import Header from "./components/Header";
import PersonalColor from "./pages/PersonalColor";
function App() {
  // const nav = useNavigate();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lips" element={<Lips />} />
        <Route path="/palettes" element={<Palettes />} />
        <Route path="/personalcolor" element={<PersonalColor />} />
        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </>
  );
}

export default App;
