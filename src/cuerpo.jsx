import React from 'react';
import Carousel from './carousel';

export function Cuerpo() {
    const images = [
        'imgDetalles.jpg',
    ];
    return (
        <>
            <section className="w-full md:flex gap-3 items-center mt-0">
                <div className="w-full mx-13">
                    <h1 className="text-4xl text-[#018edf] underline decoration-[#f3bc04] font-bold mt-4 mx-14">Buenos artesanos</h1>
                    <p className="text-lg mt-2 mx-14">Nuestros artesanos trabajan siempre buscando la perfeccion y el maximo detalle sin arruinar la madera</p>
                </div>
                <Carousel images={images} />
            </section>
            <section className="w-full md:flex gap-3 items-center mt-0">
                <Carousel images={images} />
                <div className="w-full mx-13">
                    <h1 className="text-4xl text-[#018edf] underline decoration-[#f3bc04] font-bold mt-4 mx-10">Buenos artesanos</h1>
                    <p className="text-lg mt-2 mx-10">Nuestros artesanos trabajan siempre buscando la perfeccion y el maximo detalle sin arruinar la madera</p>
                </div>
            </section>
        </>
    );
}