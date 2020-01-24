import React, { Component } from 'react'
import uuid from 'uuid'

const stateInicial = {
  cita : {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
}

class NuevaCita extends Component {
  state = { ...stateInicial }

  handleChange = e =>{

    //colocar lo que el usuario escribe en el state
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name] : e.target.value
      }
    })
  }

  //cuando el usuario envia el formulario
  handleSubmit = e =>{
    e.preventDefault()

    //extraer valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita

    //validar que los campos estén llenos
    if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
      this.setState({
        error: true
      })
      //detener ejecucion
      return;
    }
    //generar objeto con los datos
    const nuevaCita = {...this.state.cita}
    nuevaCita.id = uuid()

    //agregar la cita al state de App
    this.props.crearNuevaCita(nuevaCita)

    //colocar en el state inicial
    this.setState({
      ...stateInicial
    })
  }

  render() {

    //extraer valores del state
    const { error } = this.state
    console.log(error)

    return (
      <div className="card">
        <div className="cardbody">
          <h2 className="card_title">
            llena el formulario para crear una nueva cita
          </h2>
          { error ? <div className="msj_warning">llena el formulario para crear una nueva cita</div> : null }
          <form 
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="">nombre mascota</label>
              <div>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="nombre mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">nombre dueño</label>
              <div>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="nombre dueño mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha</label>
              <div>
                <input 
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Hora</label>
              <div>
                <input 
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">nombre dueño</label>
              <textarea
                className="form-control-area"
                name="sintomas"
                placeholder="describe los sintomas"
                onChange={this.handleChange}
                value={this.state.cita.sintomas}
              >
              </textarea>
            </div>
            <div className="form-group flex-end">
            <input type="submit" value="Agregar Nueva Cita" className="btn enviar"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NuevaCita