import { PencilSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Funcionario from "../../../models/funcionario/Funcionario";

interface CardFuncionarioProps {
  funcionario: Funcionario;
}
function CardFuncionarios({ funcionario }: CardFuncionarioProps) {
  return (
    <div
      className="border flex flex-col overflow-hidden justify-between 
            rounded-xl shadow-xl font-mono"
    >
      <header className="items-center flex py-2 px-6 bg-teal-800 text-white font-semibold text-2xl">
        <h1 className="w-3/4">{funcionario.nome}</h1>

        <Link to="" className="justify-end w-1/4 flex text-sm gap-2">
          <button>
            <PencilSimple size={24} />
          </button>
        </Link>
      </header>
      <section className="flex p-4 items-center bg-emerald-50">
        <img
          src="https://i.imgur.com/fyfri1v.png"
          alt="Foto do Funcionário"
          className="w-32 h-32 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">Informações</h2>
          <ul className="mt-2">
            <li>
              <strong>Admissão:</strong>
              {funcionario.admissao}
            </li>
            <li>
              <strong>Email:</strong>
              {funcionario.email}
            </li>
            <li>
              <strong>Departamento:</strong>
              {funcionario.departamento}
            </li>
            <li>
              <strong>Cargo:</strong>
              {funcionario.cargo}
            </li>
            <li>
              <strong>Funcional:</strong>
              {funcionario.funcional}
            </li>
            <li>
              <strong>Telefone:</strong>
              {funcionario.telefone}
            </li>
            <li>
              <strong>Status:</strong>
              {funcionario.status}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CardFuncionarios;
