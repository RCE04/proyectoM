import { Reseñas } from './reseñas';
import { Cuerpo } from './cuerpo';
import { Footer } from "./footer";
import { Cabecera } from './cabecera';

function Inicio() {
    return (
        <>
            <Cabecera />
            <Cuerpo />
            <Reseñas />
            <Footer />
        </>
    );
}

export default Inicio;