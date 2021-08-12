import imgTravel from '../../assets/travel.png'
import "./Welcome.scss";
import { agencies } from '../../dummyData'

const Welcome = () => {
    
    return (
        <div className="greating">
            <img className="greating__img" src={imgTravel} alt="travel" />
            <div className="greating__container">
                <h1>Hello welcome</h1>
                <h2>
                    <p>sabemos que quieres viajar con <strong>{agencies[0].name}</strong></p> 
                    <p>por favor diligencia el siguiente formulario:</p>
                </h2>
            </div>
        </div>
    )
}

export default Welcome;
