import imgTravel from "../../assets/travel.png";
import "./Contein.scss";

const Contein = () => {
  return (
    <div className="home">
      <img className="home__img" src={imgTravel} alt="travel" />
      <div className="home_container">
        <h1 className="home_container-title">
          Welcome to <strong>Flifht Form</strong> !
        </h1>
        <h2>
          <p>
            select a travel agency from <strong>Flifht Form</strong>
          </p>
          <p>Please fill out the forms, thank you.</p>
        </h2>
      </div>
    </div>
  );
};

export default Contein;
