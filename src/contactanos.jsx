import React, { useState } from "react";

import { Footer } from "./footer";
import { Cabecera } from './cabecera';
import { Reseñas } from "./reseñas";



function Contactanos() {
    const [tipoContraseña, setTipoContraseña] = useState('password');

    const cambiarTipo = () => {
        setTipoContraseña((prevTipo) => (prevTipo === 'password' ? 'text' : 'password'));
    };
    return (
        <>
            <Cabecera />
            <form className="mx-10 my-10 border-4">
                <label htmlFor="Email" >Email:</label>
                <input type="text" id="Email" />

                <div className="flex">
                    <label htmlFor="Contrseña">Contraseña:</label>
                    <input type={tipoContraseña} id="Contraseña" />
                    <button type="button" onClick={cambiarTipo} className="flex">
                        Cambiar Tipo
                    </button>
                </div>

                <label htmlFor="Nombre" className="mr-5">Nombre:</label>
                <input type="text" id="Nombre" placeholder="Nombre" />
            </form >
            <Reseñas />
            <Footer />
        </>
    );
}

export default Contactanos;