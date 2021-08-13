import imgTravel from "../../assets/travel.png";
import "./Welcome.scss";

const Welcome = ({ agencie }) => {
  return (
    <div className="greating">
      <img className="greating__img" src={imgTravel} alt="travel" />
      <div className="greating__container">
        <h1>
          Welcome to <strong>{agencie.name}</strong> !
        </h1>
        <h2>
          <p>
            We know you want to travel with <strong>{agencie.name}</strong>
          </p>
          <p>Please fill out the following form:</p>
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
