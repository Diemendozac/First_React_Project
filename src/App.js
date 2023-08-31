import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer'

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo:"Programación",
      nombre:"Diego Mendoza",
      foto:"https://github.com/HarlandLohora.png",
      puesto:"Programación",
    },
    {
      equipo:"UX y Diseño",
      nombre:"Ariana Romero",
      foto:"https://github.com/HarlandLohora.png",
      puesto:"Diseñadora Gráfica",
    },
    {
      equipo:"Data Science",
      nombre:"John Doe",
      foto:"https://github.com/HarlandLohora.png",
      puesto:"Desarrollador Front-End",
    },
    {
      equipo:"DevOps",
      nombre:"Sir Lancelot",
      foto:"https://github.com/HarlandLohora.png",
      puesto:"Scrum Master",
    }
  ])
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const eliminarColaborador = () => {
    console.log('Eliminar colaborador');
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && 
        <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo, index) => {
          const colabs = colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)
          return (colabs.length > 0) && (
            <Equipo 
              datos = {equipo} 
              key = {index}
              colaboradores={colabs}
              eliminarColaborador={eliminarColaborador}
            /> 
          )
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
