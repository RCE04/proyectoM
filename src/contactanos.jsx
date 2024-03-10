import React, { useState } from "react";

import { Footer } from "./footer";
import { Cabecera } from './cabecera';
import { Reseñas } from "./reseñas";



function Contactanos() {
    return (
        <>
            <Cabecera />
            <form className="mx-auto my-10 border-4 p-8 rounded-md shadow-md w-full max-w-md">
                <legend className="text-xl font-semibold mb-4">Pide cita</legend>

                <div className="mb-4">
                    <label htmlFor="Email" className="block text-sm font-semibold text-gray-600">Email:</label>
                    <input type="text" id="Email" className="w-full mt-1 p-2 border rounded-md" />
                </div>

                <div className="mb-4">
                    <label htmlFor="Nombre" className="block text-sm font-semibold text-gray-600">Nombre:</label>
                    <input type="text" id="Nombre" className="w-full mt-1 p-2 border rounded-md" />
                </div>

                <div className="mb-4">
                    <label htmlFor="Telefono" className="block text-sm font-semibold text-gray-600">Telefono:</label>
                    <input type="tel" id="Telefono" className="w-full mt-1 p-2 border rounded-md" />
                </div>

                <div className="mb-4">
                    <label htmlFor="Comentario" className="block text-sm font-semibold text-gray-600">Comentario:</label>
                    <textarea id="Comentario" rows="4" className="w-full mt-1 p-2 border rounded-md"></textarea>
                </div>

                <button
                    type="submit"
                    className="mx-auto px-4 py-2 text-base font-semibold text-black bg-white border-2 border-black hover:bg-[#043c54] hover:text-white transition-all duration-200 focus:outline-none focus:border-[#043c54]"
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