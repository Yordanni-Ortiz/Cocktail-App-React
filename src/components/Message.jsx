import copa from "../data/img/fragil.png"

const Message = () => {
    return (
        <div className="alert">
            <img src={copa} alt="" className="copa"/>
            <h2>Lo sentimos, no hay coincidencias en tu búsqueda.</h2>
        </div>
    )
}

export default Message