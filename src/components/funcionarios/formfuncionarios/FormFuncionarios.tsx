import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
{
  /*import funcionario from "../../../models/Funcionario";*/
}
{
  /*import Departamento from "../../../models/Departamento";*/
}
{
  /*import { buscar, atualizar, cadastrar } from "../../../service/Service";*/
}
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
function FormFuncionario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Departamentos, setDepartamentos] = useState<Departamento[]>([]);

  const [Departamento, setDepartamento] = useState<Departamento>({
    id: 0,
    descricao: "",
  });
  const [funcionario, setfuncionario] = useState<funcionario>(
    {} as funcionario
  );

  const { id } = useParams<{ id: string }>();

  async function buscarfuncionarioPorId(id: string) {
    try {
      await buscar(`/funcionarios/${id}`, setfuncionario);
    } catch (error) {
      ToastAlerta("Erro ao buscar a funcionario", "error");
    }
  }

  async function buscarDepartamentoPorId(id: string) {
    try {
      await buscar(`/Departamentos/${id}`, setDepartamento);
    } catch (error) {
      ToastAlerta("Erro ao buscar o Departamento", "error");
    }
  }

  async function buscarDepartamentos() {
    try {
      await buscar("/Departamentos", setDepartamentos);
    } catch (error) {
      ToastAlerta("Erro ao buscar Departamentos", "error");
    }
  }

  useEffect(() => {
    buscarDepartamentos();

    if (id !== undefined) {
      buscarfuncionarioPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setfuncionario({
      ...funcionario,
      Departamento: Departamento,
    });
  }, [Departamento]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setfuncionario({
      ...funcionario,
      [e.target.name]: e.target.value,
      Departamento: Departamento,
    });
  }

  function retornar() {
    navigate("/funcionarios");
  }

  async function gerarNovafuncionario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/funcionarios`, funcionario, setfuncionario);
        ToastAlerta("funcionario atualizada com sucesso", "info");
      } catch (error) {
        ToastAlerta("Erro ao atualizar a funcionario", "error");
      }
    } else {
      try {
        await cadastrar(`/funcionarios`, funcionario, setfuncionario);
        ToastAlerta("funcionario cadastrada com sucesso", "info");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar a funcionario", "error");
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoDepartamento = Departamento.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center bg-teal-960">
      <h1 className="text-4xl text-center my-8 text-yellow-200">
        {id !== undefined ? "Editar funcionario" : "Cadastrar funcionario"}
      </h1>

      <form
        className="flex flex-col w-1/2 gap-4"
        onSubmit={gerarNovafuncionario}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-white">
            Nome do funcionario*
          </label>
          <div className="p-[2px] bg-gradient-to-r from-yellow-500 to-lime-100 rounded">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
              value={funcionario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="cargo" className="text-white">
            Cargo do funcionario*
          </label>
          <div className="p-[2px] bg-gradient-to-r from-yellow-500 to-lime-100 rounded">
            <input
              type="text"
              id="cargo"
              name="cargo"
              placeholder="Cargo"
              className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
              value={funcionario.cargo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="Departamento" className="text-white">
            Departamento do funcionario*
          </label>
          <div className="p-[2px] bg-gradient-to-r from-yellow-500 to-lime-100 rounded">
            <select
              name="Departamento"
              id="Departamento"
              className="w-full bg-white dark:bg-zinc-900 text-white placeholder:text-slate-400 border-none rounded p-2 focus:outline-none"
              onChange={(e) => buscarDepartamentoPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione um Departamento
              </option>
              {Departamentos.map((Departamento) => (
                <option value={Departamento.id}>
                  {Departamento.descricao}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="rounded disabled:bg-slate-400 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoDepartamento}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormFuncionario;
