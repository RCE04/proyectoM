import { Cabecera } from './cabecera';
import { Footer } from "./footer";
import { ImagenTexto } from "./imagenTexto";

function Madera() {
    return (
        <>
            <Cabecera />
            <ImagenTexto
                imageUrl="/abeto.jpg"
                text="ABETO"
                subtext="Es uno de los tipos de madera más comunes en toda Europa Central y Oriental, por lo tanto, se puede encontrar fácilmente también en España. Es una madera clara, blanca-amarillenta y fácil de trabajar. Se utiliza para fabricar muebles, instrumentos musicales, puertas y ventanas, y es muy común en el sector de la construcción, también porque tiene una gran resistencia a la humedad."
            />
            <ImagenTexto
                imageUrl="/pino.jpg"
                text="PINO"
                subtext="Es muy fácil trabajar con el pino y, como la mayoría de las variedades que son relativamente suaves, se presta a la escultura. Es uno de los tipos de madera más baratas y usadas en la construcción. Hoy en día, el “pino” es un término genérico para muchos tipos de madera blanda de tonos claros y que adquieren un característico color miel cuando se sella. Tiene una textura uniforme y es fácil de trabajar, lo que lo convierte en uno de los tipos de maderas más utilizado por los profesionales de la carpintería, paneles, muebles y molduras."
            />
            <ImagenTexto
                imageUrl="/cedro.jpg"
                text="CEDRO"
                subtext="El tipo más común de cedro es la variedad roja occidental. El cedro tiene un color rojizo , este tipo de madera es relativamente suave, tiene un grano recto y un olor ligeramente aromático. El cedro rojo occidental se usa principalmente para hacer muebles de exterior, ya que puede utilizarse en ambientes húmedos sin descomponerse. Además, tiene un precio moderado y es bastante robusto, por lo que es excelente para muebles de jardín."
            />
            <ImagenTexto
                imageUrl="/acre.jpg"
                text="ACRE"
                subtext="Una madera muy extendida en todo el mundo, con un color muy claro, que puede ir desde el blanco hasta el amarillento y el rosado. Este tipo de madera tiene una dureza media y, ciertamente, no tiene una duración muy larga, pero se usa tanto en la construcción como en la fabricación de instrumentos musicales y muebles. Sin embargo, no se encuentra entre los tipos de madera más valiosos del mercado."
            />
            <ImagenTexto
                imageUrl="/haya.jpg"
                text="HAYA"
                subtext="Un tipo de madera que se extiende por toda Europa y, por lo tanto, también es común en España. Tiene un color rojizo, y cuanto más viejo es, más oscuro se vuelve. Esta madera es bastante dura y fácil de trabajar y se usa para hacer instrumentos musicales, pero también para muebles de todo tipo. Su resistencia es bastante buena."
            />
            <Footer />
        </>
    );
}

export default Madera;