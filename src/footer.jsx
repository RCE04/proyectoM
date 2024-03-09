
export function Footer() {
    return (
        <footer className="bg-black">
            <section className="w-full flex py-6">
                <div className="w-1/3 flex flex-col items-center">
                    <div className="flex ml-16">
                        <img src="github.png" className="w-7" />
                        <a href="https://github.com/RCE04" className="text-white flex-col items-center mr-16 pt-0.5">Hecho por Rodrigo Cabello Erencia</a>
                    </div>

                    <div className="flex ml-16">
                        <img src="gmail.png" className="w-7" />
                        <a href="vanguardia@gmail.com" className="text-white flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">vanguardia@gmail.com</a>
                    </div>
                </div>

                <div className="w-[2px] h-15 bg-white/50"></div>

                <div className="w-1/3 flex flex-col items-center">
                    <div className="flex ml-16">
                        <img src="social.png" alt="WhatsApp" className="w-7" />
                        <a href="+34722341235" className="text-white  flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">Logo en un futuro</a>
                    </div>
                </div>

                <div className="w-[2px] h-15 bg-white/50"></div>

                <div className="w-1/3 flex flex-col items-center">
                    <div className="flex ml-16">
                        <img src="social.png" alt="WhatsApp" className="w-7" />
                        <a href="+34722341235" className="text-white  flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">+34 722-341-235</a>
                    </div>
                </div>
            </section>

        </footer>
    );
}

