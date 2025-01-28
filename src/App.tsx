import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/funcionarios" element={<ListaFuncionarios />} />
          </Routes>
          <Footer />F{" "}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
