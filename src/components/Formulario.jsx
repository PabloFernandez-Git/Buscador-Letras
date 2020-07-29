import React, {useState} from 'react';


const Formulario = ({ guardarBusquedaLetra }) => {

    // State
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const [error, guardarError] = useState(false);

    // Destructuring
    const { artista, cancion } = busqueda;

    // Funcion a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Submit: consultar las APIS
    const buscarInformacion = e => {
        e.preventDefault();

        // Validar
        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // Pasar al componente principal
        guardarBusquedaLetra(busqueda);
    }

    return (  
        <div className="bg-info">

            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null } 

            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion} 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>                                    
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la cancion"
                                            onChange={actualizarState}
                                            value={cancion}
                                    />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;