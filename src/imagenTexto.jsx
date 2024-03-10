import React from 'react';

export const ImagenTexto = ({ imageUrl, text, subtext }) => {
    return (
        <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden shadow-md p-4 my-4 mx-4 md:mx-20">
            <img
                src={imageUrl}
                alt="Imagen"
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-4 md:mb-0 md:mr-4"
            />
            <div>
                <p className="text-lg md:text-xl font-semibold text-[#043c54] mb-2">{text}</p>
                <p className="text-base md:text-lg font-light">{subtext}</p>
            </div>
        </div>

    );
};

