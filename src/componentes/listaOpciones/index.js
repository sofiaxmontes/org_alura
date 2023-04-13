import "./listaOpciones.css"

const ListaOpciones = (props) => {
    /*Método map para arreglos -> 
    nombrearreglo.map((parametro,posición)) => {
    return < key nuevo arreglo transformado}
    Es decir: 
    {equipos.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}
    Si el arreglo regresa un solo elemento, puede escribirse como
    en el código siguiente (veáse línea 25)*/

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index)=> <option key={index} value={equipo}>{equipo}</option>)}
            </select>
    </div>
}

export default ListaOpciones