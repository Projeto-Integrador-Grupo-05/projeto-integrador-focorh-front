
function About() {
    return (
        <>
            <div className="flex justify-center font-bold font-sans">
                <div className='container grid grid-cols-2 text-teal-0'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Sobre Nós
                        </h2>
                        <p className='text-xl flex justify-center items-center ml-3 text-justify'>
                            Na FocoRH, acreditamos que as pessoas são o maior ativo de qualquer organização. 
                            Por isso, desenvolvemos um sistema de gerenciamento de RH completo e intuitivo, projetado para otimizar e 
                            transformar a gestão de recursos humanos. Nossa missão é proporcionar ferramentas inovadoras que melhorem a experiência dos 
                            colaboradores e agilizem os processos administrativos das equipes de RH.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                              
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                    <img
                        src="https://i.imgur.com/vmiqxKx.png"
                        alt="Imagem Página Home"
                        className='w-[400px] mt-12 mb-14 ml-14'
                    />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About