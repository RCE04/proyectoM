import React, { useState } from "react";

import { Footer } from "./footer";
import { Cabecera } from './cabecera';
import { Reseñas } from "./reseñas";



function Contactanos() {
    return (
        <>
            <Cabecera />
            <form action="/contactanos" method="post" className="mx-auto my-10 border-4 p-4 md:p-8 rounded-md shadow-md w-full max-w-md">
                <legend className="text-xl md:text-2xl font-semibold mb-4">Pide cita</legend>

                <div className="mb-4">
                    <label htmlFor="Email" className="block text-sm md:text-base font-semibold text-gray-600">Email:</label>
                    <input type="email" id="Email" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-[#043c54]" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="Nombre" className="block text-sm md:text-base font-semibold text-gray-600">Nombre:</label>
                    <input type="text" id="Nombre" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-[#043c54]" />
                </div>

                <div className="mb-4">
                    <label htmlFor="Telefono" className="block text-sm md:text-base font-semibold text-gray-600">Teléfono:</label>
                    <input type="tel" id="Telefono" className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-[#043c54]" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="Comentario" className="block text-sm md:text-base font-semibold text-gray-600">Comentario:</label>
                    <textarea id="Comentario" rows="4" className="w-full mt-1 p-2 border rounded-md resize-none focus:outline-none focus:border-[#043c54]"></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-base md:text-lg font-semibold text-white bg-[#043c54] border-2 border-[#043c54] rounded-md hover:bg-black transition-all duration-200 focus:outline-none focus:border-black"
                >
                    Enviar
                </button>
            </form>
            <Reseñas />
            <Footer />
        </>
    );
}

export default Contactanos;