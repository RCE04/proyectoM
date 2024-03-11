import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Cabecera() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className="">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" title="" className="flex">
                            <img className="w-auto h-14" src="logo.png" alt="" />
                        </Link>
                    </div>

                    <h1 className='text-xl ml-5 font-bold text-[#043c54]'>Vanguardia Mueblera</h1>

                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>


                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className="my-8 text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]">
                                    <Link to="/madera">Maderas</Link>
                                </li>
                                <li className="my-8 text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]">
                                    <Link to="/nosotros">Sobre Nosotros</Link>
                                </li>
                                <li className="my-8 px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-[#043c54] hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button">
                                    <Link to="/contactanos">Contactanos</Link>
                                </li>
                            </ul>
                        </div>
                    </section>


                    <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <Link to="/madera" title="" className="text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]"> Maderas </Link>
                        <Link to="/nosotros" title="" className="text-base font-semibold text-[#043c54] transition-all duration-200 hover:text-[#048dde]"> Sobre Nosotros </Link>
                        <div className="w-px h-5 bg-black/20"></div>
                        <Link to="/contactanos" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-[#043c54] hover:text-white transition-all duration-200 focus:bg-black focus:text-[#f3bc04]" role="button"> Contactanos </Link>
                    </div>
                </div>
            </div >
        </header >
    );
}
