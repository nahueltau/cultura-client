import { FaRegCalendarPlus } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
const CardZocalo = ({ conv }) => {
    const formatDate = (dateString) =>{

        let dividedString = dateString.split("-");

        let numberToMonth = (numberOfMonthString)=>{
            let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
            let numberOfMonth = Number(numberOfMonthString);
            let month = months[numberOfMonth-1];
            return month;
        }

        let noLeftZeros = (numbreString)=>{
            let number = Number(numbreString);
            return String(number);
        }

        let formattedDate = noLeftZeros(dividedString[2]) + " de " + numberToMonth(dividedString[1]) + " de " + dividedString[0];
        return formattedDate;
    }

    return (
        <div className="card-zocalo">
            {conv.estado==="cerrada" ? <span><FaRegCalendarTimes className="icon-red"/> Convocatoria Cerrada</span> : <span><FaRegCalendarPlus className="icon-green"/> Hasta el {formatDate(conv.fecha_fin)}</span> }
        </div>
    )
}

export default CardZocalo
