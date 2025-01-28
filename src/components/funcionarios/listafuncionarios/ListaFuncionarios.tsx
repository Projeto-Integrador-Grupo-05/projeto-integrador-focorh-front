import CardFuncionarios from "../cardfuncionarios/CardFuncionarios";

function ListaFuncionarios() {

    const funcionarios = [
        {
            nome: "João Silva", admissao: "24/11/2013",
            email: "joao.silva@exemplo.com",
            departamento: "TI",
            cargo: "Desenvolvedor Java",
            funcional: "987348572",
            telefone: "(11) 98765-4321",
            status: "Ativo"
        },
        {
            nome: "Maria Oliveira",
            admissao: "15/02/2018",
            email: "maria.oliveira@exemplo.com",
            departamento: "Criação",
            cargo: "Designer",
            funcional: "123456789",
            telefone: "(21) 91234-5678",
            status: "Ativo"
        },
        {
            nome: "Carlos Souza",
            admissao: "10/05/2020",
            email: "carlos.souza@exemplo.com",
            departamento: "Financeiro",
            cargo: "Analista",
            funcional: "987654321",
            telefone: "(31) 99876-5432",
            status: "Ativo"
        }
    ];
    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {funcionarios.map((funcionario, index) => (
                            <CardFuncionarios key={index} funcionario={funcionario} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaFuncionarios;