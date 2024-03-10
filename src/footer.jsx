import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-black">
            <section className="w-full flex flex-col md:flex-row py-6">
                <div className="md:w-1/3 w-full flex flex-col items-center mb-4 md:mb-0">
                    <div className="flex ml-16 mb-5">
                        <img src="github.png" className="w-7 mr-2" />
                        <a href="https://github.com/RCE04" className="text-white flex-col items-center mr-16 pt-0.5">Hecho por Rodrigo Cabello Erencia</a>
                    </div>

                    <div className="flex ml-16">
                        <img src="gmail.png" className="w-7 mr-2" />
                        <a href="mailto:vanguardia@gmail.com" className="text-white flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">vanguardia@gmail.com</a>
                    </div>
                </div>

                <div className="w-full md:w-[2px] md:h-15 bg-white/50 mb-4 md:mb-0"></div>

                <div className="md:w-1/3 w-full flex flex-col items-center mb-4 md:mb-0">
                    <div className="flex flex-col mx-16">
                        <img src="logo.png" alt="Logo" className="w-14 mx-auto" />
                        <Link to="/" className="text-white  flex-col items-center mx-auto pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">Vanguardia Mueblera</Link>
                    </div>
                </div>

                <div className="w-full md:w-[2px] md:h-15 bg-white/50 mb-4 md:mb-0"></div>

                <div className="md:w-1/3 w-full flex flex-col items-center">
                    <div className="flex ml-16 mb-5 mr-2">
                        <img src="social.png" alt="WhatsApp" className="w-7" />
                        <a href="tel:+34722341235" className="text-white  flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">+34 722-341-235</a>
                    </div>
                    <div className="flex ml-16">
                        <img src="localizacion.png" alt="Icono Localizacion" className="w-7 mr-2" />
                        <a href="https://maps.app.goo.gl/iB76oxV2kxtr7FHE7" className="text-white  flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">C. de Zorrilla, 1, Centro, 28014 Madrid</a>
                    </div>
                </div>
            </section>

        </footer>
    );
}

