import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
