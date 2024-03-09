import React from 'react';
import Carousel from './carousel';

export function Cuerpo() {
    const images = [
        "/diseñadores.jpg",
        "/diseñoInterior.jpg",
    ]
    return (
        <>
            <section className="w-full md:flex gap-3 items-center mt-0">
                <div className="w-full mx-13">
                    <h1 className="text-4xl text-[#018edf] underline decoration-[#f3bc04] font-bold mt-4 mx-14">Buenos artesanos</h1>
                    <p className="text-lg mt-2 mx-14">Nuestros artesanos trabajan siempre buscando la perfeccion y el maximo detalle sin arruinar la madera</p>
                </div>
                <img src='imgDetalles.jpg' className='w-1/2 h-50' />
            </section>

            <section className="w-full md:flex gap-3 items-center mt-0">
                <img src='diseñadores3.jpg' className='w-1/2 h-50' />
                <div className="w-full mx-13">
                    <h1 className="text-4xl text-[#018edf] underline decoration-[#f3bc04] font-bold mt-4 mx-10">Buenos diseñadores de interiores</h1>
                    <p className="text-lg mt-2 mx-10">Nuestros diseñadores siempre estaran dispuestos a ayudarte a conseguir el maximo espacio posible sin la necesidad de hacer reformas</p>
                </div>
            </section>

            <section className='my-10 border-[#f3bc04] '>
                <div className=' flex flex-col items-center  text-4xl text-[#018edf] font-bold  mx-64 border-4 border-l-[#fff] border-t-[#fff] border-r-[#fff] border-b-[#f3bc04]'>Nuestros mejores diseños 2023</div>
                <Carousel images={images} />
            </section>

            <section className='w-full flex mb-10'>
                <div className='w-1/2 flex flex-col items-center mx-16'>
                    <img src="/transporte.png" alt="" className='w-16 mb-2' />
                    <div className="text-center">
                        <h1 className='font-semibold text-xl text-[#043c54]'>Transporte</h1>
                        <p className='text-lg'>Entregamos su compra de muebles de manos de profesionales cualificados en toda España e Internacionalmente. Reparto diario a Madrid.</p>
                    </div>
                </div>

                <div className="w-[2px] h-15 bg-black/20"></div>

                <div className='w-1/2 flex flex-col items-center mx-16'>
                    <img src="/montaje.png" alt="" className='w-16 mb-2 ' />
                    <div className="text-center">
                        <h1 className='font-semibold text-xl text-[#043c54] '>Montaje</h1>
                        <p className='text-lg'>Opción de servicio de montaje y transporte profesional.</p>
                    </div>
                </div>

            </section >
        </>

    );
}