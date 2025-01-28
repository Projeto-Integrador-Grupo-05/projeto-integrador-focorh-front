import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import "./ModalFuncionario.css";
import { motion } from "framer-motion";
import FormFuncionario from "../funcionarios/formfuncionarios/FormFuncionarios";
function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <motion.button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-900 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <span className="transition-all duration-500 ease-in-out transform group-hover:translate-x-[120%] group-hover:opacity-0">
                Novo Funcionario
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                👔
              </div>
            </span>
          </motion.button>
        }
        modal
      >
        <FormFuncionario />
      </Popup>
    </>
  );
}

export default ModalPostagem;
