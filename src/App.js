import React, { Component } from 'react'
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  state = {
    citas: []
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos]

    //agregar el nuevo state
    this.setState({
      citas
    })
  }

  //elimina las citas del state
  eliminarCitas = id => {
    console.log(id)
    console.log('diste click')
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo = "administrador pacientes veterinaria"
        />
        <NuevaCita 
          crearNuevaCita={this.crearNuevaCita}
        />

        <ListaCitas 
          citas={this.state.citas}
          eliminarCita={this.eliminarCita}
        />

      </div>
    )
  }
}

export default App

