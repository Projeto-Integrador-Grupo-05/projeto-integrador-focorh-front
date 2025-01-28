import ModalFuncionario from "../../components/funcionarios/modalfuncionario/ModalFuncionario"

function Home() {
    return (
        <>
            <div className="flex justify-center font-bold font-sans">
                <div className='container grid grid-cols-2 text-teal-0'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Sistema de Gerenciamento de RH
                        </h2>
                        <p className='text-xl flex justify-center ml-3'>
                        Este é o lugar para valorizar seu potencial, compartilhar suas experiências e construir sua jornada profissional.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                              <ModalFuncionario />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/OtFET9Y.png"
                            alt="Imagem Página Home"
                            className='w-7/4 mt-12 mb-14 ml-14'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home