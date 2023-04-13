/* {{}}: Se utiliza para manejar propiedades css como objetos en js 
Sin embargo, cuando hay guiones en la propiedad css, se sustituye por
mayúsculas, es decir:
css: background-color = js: backgroundColor

Desestructuración: se desempaca el valor de arreglo o propiedades, en distintas variables. Es decir, antes teníamos <h3 style = {{backgroundColor: props.datos.colorSecundario}} y ahora se tiene lo siguiente; reduciendo el número de líneas y asignando los valores en variables que pueden ser leídas como props*/

import "./equipo.css";
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
  const estiloBackground = { backgroundColor: hexToRgba(colorPrimario, 0.6) };
  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloBackground}>
          <input
            className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id)
            }}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
