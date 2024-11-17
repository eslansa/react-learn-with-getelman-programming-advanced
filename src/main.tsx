//Diferencias entre importar un archivo
// *import { StrictMode } from 'react' (Al hacerlo de esta manera estas especificando el archivo a utlizar)
// import App from './App.tsx' (De esta manera el export debe ser export default App y por tanto el solo esta intentando leer este archivo y lo q exporta, pero el nombre no influye)

//Esta manera de importar de react es una mala practica
// import React from 'react' un ejemplo de uso es React.StricMode
// import * as moment from 'moment' esto tamben esta mal estas trayendo todo absolutamente de la libreria.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


{/*
  Empezamos por el StrictMode q controla la manera en la q funcionan los componentes, q funcione correctamente
  *Monta los componentes, los carga, los rompes, y los vuelve hacer...
  *a veces al tener este modo se hace 2 llamadas a la api, pq se destruye el componente y se vuelve hacer y se llama 2 veces a la api
  *!!!! En produccion se quita.

  Nuestra aplicacion utiliza el metodo createRoot, va crear el lugar donde va estar la base de nuestra aplicacion. crea el elemento con id "root"
  Va a renderizar algo por default, esto se llama boostraping

  Cuando renderiza, muestra el componente App
  */}