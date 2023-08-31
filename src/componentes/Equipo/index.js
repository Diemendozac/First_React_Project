import './Equipo.css'
import Colaborador from '../Colaborador';

const Equipo = (props) => {

  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores, eliminarColaborador } = props;
  const cambiarColor = (e) => {
    console.log(e.target.value)
  }

  return (
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
      <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
      <input
        type="color"
        className='input__color'
        value={colorSecundario}
        onChange={cambiarColor}
      />
      <div className="colaboradores">
        {
          colaboradores.map((colaborador, index) =>
            <Colaborador
              key={index}
              datos={colaborador}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
            />)
        }
      </div>
    </section>
  );
}

export default Equipo;