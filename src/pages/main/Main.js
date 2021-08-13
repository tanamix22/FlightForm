import React, { useEffect, useState } from "react";
import Welcome from "../../components/welcome/Welcome";
import FormAgency from "../../components/form/Form";
import { useParams } from "react-router-dom";
import DataAgencie from "../../utils/dummyData.json";
import "./Main.scss";

export const Main = () => {
  const [agencie, setAgencie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const agency = DataAgencie.find((item) => item.id === parseInt(id));
    setAgencie(agency);
  }, [id]);

  return (
    <main>
      <Welcome agencie={agencie} />
      <FormAgency />
    </main>
  );
};

export default Main;
