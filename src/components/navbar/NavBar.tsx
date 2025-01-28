import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-teal-800 text-white">
        <div className="container flex justify-between items-center text-lg">
          <Link to="/home" className=" flex items-center text-2xl font-bold">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10527/10527142.png"
              alt="FocoRH Logo"
              className="rounded-lg w-12 h-12 mr-2 "
            />
            <div>FocoRH</div>
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
