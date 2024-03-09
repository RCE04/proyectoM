import { Footer } from "./footer";
import { Cabecera } from './cabecera';

function Nosotros() {
    return (
        <>
            <Cabecera />
            <div className="text-4xl font-extrabold text-[#018edf] flex justify-center ">
                <h1>Nuestra historia</h1>
            </div>
            <p className="mx-16 my-6">Hace muchos años, en un encantador pueblo, se encontraba una modesta carpintería llamada "Vanguardia Mueblera", propiedad de un apasionado carpintero llamado José Luis. Este hábil artesano había heredado su amor por la madera de su abuelo y, desde joven, trabajaba incansablemente en su taller para crear piezas únicas y hermosas.</p>
            <div className="w-full flex">
                <img src="/inicios.jpg" className="mx-0 flex w-1/2" />
                <img src="/imgDetalles.jpg" className="mx-0 flex w-1/2" />
            </div>
            <p className="mx-16 my-6">Al principio, Vanguardia Mueblera era conocida solo a nivel local, pero la dedicación y el talento de José Luis pronto atrajeron la atención de la comunidad. La carpintería se convirtió en el lugar preferido para aquellos que buscaban muebles personalizados y de alta calidad.</p>
            <p className="mx-16 my-6">Con el tiempo, José Luis decidió expandir su negocio y contrató a un grupo de hábiles carpinteros que compartían su pasión por el oficio. Juntos, trabajaron arduamente para satisfacer la creciente demanda de Vanguardia Mueblera. La reputación de la carpintería cruzó las fronteras del pueblo, atrayendo clientes de otras ciudades y regiones.</p>
            <p className="mx-16 my-6">La clave del éxito de Vanguardia Mueblera seguía siendo la combinación de la artesanía tradicional con un toque moderno y el uso de maderas de alta calidad. Los clientes apreciaban la atención al detalle y la posibilidad de personalizar cada pieza según sus gustos y necesidades.</p>
            <p className="mx-16 my-6">Con la firme convicción de llevar sus creaciones al ámbito internacional, José Luis creó un elegante sitio web y promocionó sus muebles en redes sociales. La respuesta fue abrumadora: pedidos de todo el mundo empezaron a llegar, desde pequeños encargos hasta proyectos de decoración para espacios exclusivos.</p>
            <p className="mx-16 my-6">La expansión internacional de Vanguardia Mueblera no fue fácil, pero el equipo de José Luis estaba comprometido y dispuesto a superar cualquier desafío. Se asociaron con artesanos locales en diferentes países, adaptando su estilo a las preferencias culturales de cada región. La calidad y la autenticidad de los muebles de Vanguardia Mueblera trascendieron las fronteras geográficas, convirtiéndola en una marca reconocida a nivel mundial.</p>
            <p className="mx-16 my-6">La historia de Vanguardia Mueblera se convirtió en un ejemplo inspirador de cómo la pasión, la calidad y la dedicación pueden llevar a un pequeño taller de carpintería a convertirse en un referente mundial. José Luis y su equipo no solo crearon muebles, sino que construyeron un legado duradero de artesanía y excelencia que perduraría a lo largo de las generaciones.</p>

            <Footer />
        </>
    );
}

export default Nosotros;