import './Colaborador.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const Colaborador = (props) => {

  const { nombre, puesto, foto } = props.datos;
  const { colorPrimario, eliminarColaborador } = props;
  const encabezado = {
    backgroundColor: colorPrimario
  };

  return (
    <div className="colaborador" onClick={eliminarColaborador}>
      <AiFillCloseCircle className='eliminar'/>
      <div className="encabezado" style={encabezado}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4 className="nombre">{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
}

export default Colaborador;