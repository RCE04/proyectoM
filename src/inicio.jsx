import { Cuerpo } from './cuerpo';
import { Footer } from "./footer";
import { Cabecera } from './cabecera';

function Inicio() {
    return (
        <>
            <Cabecera />
            <Cuerpo />
            <Footer />
        </>
    );
}

export default Inicio;