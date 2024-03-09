import React from 'react';

export function Reseñas() {
    return (
        <>
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="flex items-end justify-between">
                        <div class="flex-1 text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Comentarios</h2>

                        </div>

                        <div class="hidden lg:flex lg:items-center lg:space-x-3">
                            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-5">
                                <div class="relative">
                                    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                        <img class="object-cover w-full h-full" src="diseñadores.jpg" alt="" />
                                    </a>

                                </div>
                                <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Marzo 21, 2020 </span>
                                <p class="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" class="text-black"> Me ayudaron a colocar los muebles y a sacar el maximo partido al espacio que tengo </a>
                                </p>
                                <p class="mt-4 text-base text-gray-600">Sus diseñadores me aconsejaron poner los muebles en</p>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-5">
                                <div class="relative">
                                    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg" alt="" />
                                    </a>

                                </div>
                                <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Abril 04, 2020 </span>
                                <p class="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" class="text-black"> Ho7 Tips to run your remote team faster and better. </a>
                                </p>
                                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>

                        <div class="overflow-hidden bg-white rounded shadow">
                            <div class="p-5">
                                <div class="relative">
                                    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg" alt="" />
                                    </a>


                                </div>
                                <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> Mayo 12, 2020 </span>
                                <p class="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" class="text-black">Cuidan hasta el ultimo detalle</a>
                                </p>
                                <p class="mt-4 text-base text-gray-600">Los muelbes tienen muchos detalles, les pedi un diseño propio y lo hicieron sin ningun problema</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
}



