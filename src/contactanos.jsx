
import { Footer } from "./footer";
import { Cabecera } from './cabecera';
import { Reseñas } from "./reseñas";

function Contactanos() {
    return (
        <>
            <Cabecera />
            <form className="mx-10 my-10">
                <label htmlFor="" className="">Nombre</label>
            </form>
            <Reseñas />
            <Footer />
        </>
    );
}

export default Contactanos;