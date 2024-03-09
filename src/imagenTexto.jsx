import React from 'react';

export const ImagenTexto = ({ imageUrl, text, subtext }) => {
    return (
        <div className="flex items-center rounded-lg overflow-hidden shadow-md p-4 my-4 mx-20">
            <img
                src={imageUrl}
                alt="Imagen"
                className="w-20 h-20 object-cover rounded-full mr-4"
            />
            <div>
                <p className="text-lg font-semibold">{text}</p>
                <p className="text-base font-light">{subtext}</p>
            </div>
        </div>
    );
};

