import "./campo.css";

/*props (properties): datos que nosotros envíamos a los componentes, que
modifican su comportamiento

buscar typescript: permite agregar tipos a js
*/

const Campo = (props) => {
  const placeholderModificado = `${props.placeholder}...`;
  const { type = "text" } = props
  const manejarCambio = (e) =>{
    props.actualizarValor(e.target.value);
  }

  return <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      ></input>
    </div>

};

export default Campo;
