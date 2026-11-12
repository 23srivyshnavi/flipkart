import "./App.css";
import AddDoctor from "./assets/components/AddDoctor";
import Home from "./assets/components/Home";
import Nav from "./assets/components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;