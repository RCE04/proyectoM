import React from 'react';
import { Cabecera } from "./cabecera";

export function Header() {
    return (
        <>
            <Cabecera />
            <div className='bg-cover bg-no-repeat backdrop-blur-md backdrop-sepia bg-fixed bg-center h-screen bg-[url("/prueba2.jpg")] '>
                <h1 className="text-4xl font-extrabold text-[#018edf] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    LOS MEJORES MUEBLES DE ESPAÑA
                </h1>
            </div >
        </>
    );
}