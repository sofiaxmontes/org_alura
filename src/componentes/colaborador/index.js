import "./colaborador.css"
import {AiOutlineCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador,like} = props

    return <div className="colaborador">
        <AiOutlineCloseCircle onClick={()=>eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="salmon" onClick={()=>like(id)}/> : <AiOutlineHeart color="salmon" onClick={()=>like(id)}/>}
        </div>
    </div>
}

export default Colaborador