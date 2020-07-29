import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import axios from 'axios';

function App() {

  // State
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');

  // useEffect
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios.get(url);
      guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();

  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
