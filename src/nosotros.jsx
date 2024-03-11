import { Footer } from "./footer";
import { Cabecera } from './cabecera';

function Nosotros() {
    return (
        <>
            <Cabecera />
            <div className='flex flex-col items-center text-4xl text-[#043c54] font-bold mx-4 md:mx-8 lg:mx-64 border-4 border-l-[#fff] border-t-[#fff] border-r-[#fff] border-b-[#f3bc04]'>
                Nuestra historia
            </div>

            <p className="mx-16 my-6">Con el tiempo, expande su negocio, contrata talentosos carpinteros y lleva su marca al mercado internacional a través de un sitio web. La reputación de Vanguardia Mueblera crece, atrayendo clientes de todo el mundo. La clave del éxito radica en la combinación de la artesanía tradicional con un toque moderno y el uso de maderas de alta calidad. La empresa establece alianzas internacionales, abre sucursales en ciudades importantes y adopta prácticas sostenibles en su producción.</p>
            <p className="mx-16 my-6">La historia de Vanguardia Mueblera se convirtió en un ejemplo inspirador de cómo la pasión, la calidad y la dedicación pueden llevar a un pequeño taller de carpintería a convertirse en un referente mundial. José Luis y su equipo no solo crearon muebles, sino que construyeron un legado duradero de artesanía y excelencia que perduraría a lo largo de las generaciones.</p>

            {/*cambair imagenes*/}

            <div className="flex flex-col md:flex-row items-center justify-center">
                <img src="detalles.jpg" className="w-full md:w-[45%] h-auto object-cover ml-1" alt="Detalles" />
                <img src="inicios.jpg" className="w-full md:w-[45%] h-auto object-cover" alt="Inicios" />
            </div>

            <div className='flex flex-col items-center text-4xl text-[#043c54] font-bold mx-4 mt-3 md:mx-8 md:mt-6 lg:mx-64 border-4 border-l-[#fff] border-t-[#fff] border-r-[#fff] border-b-[#f3bc04]'>
                Como trabajamos
            </div>

            <p className="mx-16 my-6">Supervisamos cada etapa, desde el diseño hasta el acabado. Nuestros aprendices, seleccionados por pasión y habilidad, reciben formación integral y participan activamente en proyectos bajo nuestra tutela.
                En vanguardia mueblera fomentamos la creatividad y colaboración, impulsando la innovación en el taller</p>
            <p className="mx-16 my-6">La expansión internacional implica asociaciones con artesanos locales, adaptando el estilo de Vanguardia Mueblera a diversas culturas y estilos. El éxito de la empresa radica en la atención al detalle, la calidad constante y la formación de nuevos talentos.</p>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <img src="aprendices.jpg" className="w-full md:w-[45%] h-auto object-cover mb-4 md:mb-0" alt="aprendices" />
                <img src="nosotrosDetalles.jpg" className="w-full md:w-[45%] h-auto object-cover" alt=" Detalles para de madera" />
            </div>

            <Footer />
        </>
    );
}

export default Nosotros;