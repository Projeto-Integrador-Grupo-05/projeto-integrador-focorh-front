import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ListaFuncionarios from "./components/funcionarios/listafuncionarios/ListaFuncionarios";
import CardDepartamento from "./components/departamento/CardDepartamento";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/funcionarios" element={<ListaFuncionarios />} />
              <Route path="/departamentos" element={<CardDepartamento />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
