
import { Footer } from "./footer";
import { Cabecera } from './cabecera';
import { Reseñas } from "./reseñas";

function Contactanos() {
    return (
        <>
            <Cabecera />
            <form className="mx-10 my-10 border-4">
                <label htmlFor="Email" >Email:</label>
                <input type="text" id="Email" />

                <div className="flex">
                    <label htmlFor="Contrseña">Contraseña:</label>
                    <input type="password" id="Contraseña" />
                    <button value={"si"} className="flex" />
                </div>

                <label htmlFor="Nombre" className="mr-5">Nombre:</label>
                <input type="text" id="Nombre" placeholder="Nombre" />
            </form>
            <Reseñas />
            <Footer />
        </>
    );
}

export default Contactanos;