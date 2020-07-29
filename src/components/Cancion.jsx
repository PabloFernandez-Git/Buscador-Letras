import React, { Fragment } from 'react';

const Cancion = ({ letra }) => {

    // Prevenir que se ejecute antes de la busqueda
    if (letra.length === 0) return null;

    return(
        <Fragment>
            <h2>Letra cancion</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    );
}

export default Cancion;