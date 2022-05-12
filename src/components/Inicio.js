import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Jose Gilberto</strong> y soy Desarrollador Web en Costa Rica,
        y ofrezco mis servicios de <strong>programacion </strong>y desarrollo en 
        todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener mas 
        visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className='last-works'> 
          <h2 className='heading'>Algunos de mis proyectos</h2>
          <p>Estos son algunos de mis trabajos de desarrollo web.</p>

          <ListadoTrabajos/>
      </section>
    </div>
  )
}
