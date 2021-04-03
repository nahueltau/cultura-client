const CardImage = ( { url , text } )  => {
    return (
        <div className="img-container">
            <img className="card-img" src={url} alt=""/>
            <p className="card-img-text">{text.length<200 ? text : text.slice(0,200).trim()+"... Leer Más"}</p>
        </div>
    )
}

export default CardImage;