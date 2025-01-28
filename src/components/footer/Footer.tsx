import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { Link } from "react-router-dom";

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-teal-950 text-white mt-auto">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        FocoRH | {data}
                    </p>
                    <p className="text-lg">Acesse o nosso GitHub</p>
                    <div className="flex gap-2">
                        <Link to="https://github.com/Projeto-Integrador-Grupo-05" target="_blank">
                            <GithubLogo size={48} weight="bold" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
