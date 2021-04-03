import CardImage from './CardImage'
import CardZocalo from './CardZocalo'

const Card = ( { conv } ) => {

    
    return (
        <div className="cust-card">
            
            <h4 className="cust-card-title">{ conv.titulo.length <95 ? conv.titulo : conv.titulo.slice(0,90)+"..."}</h4>
            <CardImage 
                url={conv.imagen}
                text={conv.bajada}
            />
            <CardZocalo conv={ conv }/>
        </div>
    )
}

export default Card

