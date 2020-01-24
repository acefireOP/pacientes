import React from 'react'

const Cita = ({cita, eliminarCita}) => (
  <div>
    <h2>Mascota: {cita.mascota}</h2>
    <p>Dueño: {cita.propietario}</p>
    <p>Fecha: {cita.fecha}</p>
    <p>Hora: {cita.hora}</p>
    <p>Sintomas: {cita.sintomas}</p>
    <button
      className="btn"
      onClick={eliminarCita}
    >borrar</button>
  </div>
)

export default Cita