import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const {equipos, valor, actualizarEquipo} = props;

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones