/*Estado - hooks: funcionalidades que ayudan a trabajar con el comportamiento de React

useState: regresa un valor de estado y una función que lo actualiza
const [nombreVariable, funciónActualiza]: useState(valorInicial)
Se pueden utilizar cuantos estados se quieran dentro de un componente

El ! se usa en js para indicar que algo es falso, cuando se utiliza en funciones puede ayudar a crear un switch

const [mostrar, actualizarMostrar] = useState (true);
    const manejarClick = () =>{
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)

    }

*Revisar App.js para una ejemplificación completa del hook*
*/
import {useState} from "react"
import "./miorg.css"

const MiOrg = (props) => {
    
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="Ícono para añadir" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg