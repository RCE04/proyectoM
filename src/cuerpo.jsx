import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';

export function Cuerpo() {
    const images = [
        "/diseñoInterior.jpg",
        "/diseñoInterior2.jpg"
    ]
    return (
        <>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/prueba13.jpg")] '>
                <h1 className="text-4xl font-extrabold text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10vh]">
                    LOS MEJORES MUEBLES DE ESPAÑA
                </h1>
            </div >

            <section className="w-full md:flex gap-3 items-center mt-0">
                <div className="w-full md:mx-8 mt-4 md:mt-0 md:w-1/2 mx-auto text-pretty">
                    <h1 className="text-2xl md:text-4xl text-[#018edf] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">Buenos artesanos</h1>
                    <p className="text-base md:text-lg md:mb-4">Nuestros artesanos trabajan siempre buscando la perfección y el máximo detalle sin arruinar la veta de la madera</p>
                    <Link to="/contactanos" className="inline-flex items-center justify-center mt-4 px-4 py-2 text-base md:text-lg font-semibold text-black border-2 border-black hover:bg-[#043c54] hover:text-white transition-all duration-200 focus:bg-[#043c54] focus:text-white" role="button">Sobre Nosotros</Link>
                </div>
                <img src='imgDetalles.jpg' className='w-full md:w-1/2 h-50 object-cover' alt="Detalles de Artesanía" />
            </section>

            <section className="w-full md:flex gap-3 items-center mt-0">
                <img src='diseñadores3.jpg' className='w-full md:w-1/2 h-50 object-cover ' />
                <div className="w-full md:mx-13 mt-4 md:mt-0 mx-auto text-pretty">
                    <h1 className="text-3xl md:text-4xl text-[#018edf] underline decoration-[#f3bc04] font-bold mb-2 md:mt-4 md:mx-10">Buenos diseñadores de interiores</h1>
                    <p className="text-base md:text-lg md:mt-2 md:mx-10">Nuestros diseñadores siempre estarán dispuestos a ayudarte a conseguir el máximo espacio posible sin la necesidad de hacer reformas</p>
                    <Link to="/contactanos" title="" className="inline-flex items-center justify-center mt-4 mx-2 md:mx-10 px-4 py-2.5 text-base md:text-lg font-semibold text-black border-2 border-black hover:bg-[#043c54] hover:text-white transition-all duration-200 focus:bg-[#043c54] focus:text-white" role="button">Sobre Nosotros</Link>
                </div>
            </section>

            <section className='my-10 border-[#f3bc04] md:border-0'>
                <div className='flex flex-col items-center text-4xl text-[#018edf] font-bold mx-4 md:mx-8 lg:mx-64 border-4 border-l-[#fff] border-t-[#fff] border-r-[#fff] border-b-[#f3bc04]'>
                    Nuestros mejores diseños 2023
                </div>
                <Carousel images={images} />
            </section>

            <section className='w-full flex flex-col md:flex-row mb-10 text-wrap'>
                <div className='w-full md:w-1/2 flex flex-col items-center  md:mx-8 lg:mx-16 mb-4 md:mb-0 max-w-screen-md mx-auto'>
                    <img src="/transporte.png" alt="" className='w-16 mb-2' />
                    <div className="text-center">
                        <h1 className='font-semibold text-xl text-[#043c54]'>Transporte</h1>
                        <p className='text-lg text-wrap'>Entregamos su compra de muebles de manos de profesionales cualificados en toda España e Internacionalmente. Reparto diario a Madrid.</p>
                    </div>
                </div>

                <div className="w-full md:w-[2px] h-15 bg-black/20 mb-4 md:mb-0"></div>

                <div className='w-full md:w-1/2 flex flex-col items-center  md:mx-8 lg:mx-16 text-wrap max-w-screen-md mx-auto'>
                    <img src="/montaje.png" alt="" className='w-16 mb-2' />
                    <div className="text-center">
                        <h1 className='font-semibold text-xl text-[#043c54]'>Montaje</h1>
                        <p className='text-lg text-wrap'>Opción de servicio de montaje y transporte profesional.</p>
                    </div>
                </div>
            </section>
        </>

    );
}