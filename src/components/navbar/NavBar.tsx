import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-teal-950 text-white font-bold">
        <div className="container flex justify-between items-center text-lg">
          <Link to="/home" className="flex items-center text-2xl font-bold">
            <img 
              src="https://i.imgur.com/vmiqxKx.png" 
              alt="FocoRH Logo" 
              className="w-20 h-20 mr-2"
            />
            FocoRH
          </Link>
          <div className="flex gap-4">
            <Link to="/funcionarios" className="hover:underline">
              Funcionários
            </Link>
            <Link to="/departamentos" className="hover:underline">
              Departamentos
            </Link>
            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;