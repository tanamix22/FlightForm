import imgTravel from '../../assets/travel.png'
import "./Welcome.scss";

const Welcome = () => {
    let Nombre= "AVIANCA";
    return (
        <div className="greating">
            <img className="greating__img" src={imgTravel} alt="travel" />
            <div className="greating__container">
                <h1>Hello welcome</h1>
                <h2>
                    <p>sabemos que quieres viajar con <strong>{Nombre}</strong></p> 
                    <p>por favor diligencia el siguiente formulario:</p>
                </h2>
            </div>
        </div>
    )
}

export default Welcome;
