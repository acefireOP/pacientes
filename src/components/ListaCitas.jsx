import React from 'react'
import Cita from './Cita'

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
   <div className="card">
     <h2 className="card_title">administra las citas aquí</h2>
     <div className="lista_citas">
      {citas.map(cita =>(
        <Cita 
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
        />
      ))}
     </div>
   </div>
  )
}

export default ListaCitas