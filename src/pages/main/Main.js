import "./Main.scss";
import Welcome from "../../components/welcome/Welcome";
import Form from "../../components/form/Form";
import { useParams } from "react-router-dom";

export const Main = () => {
  let { id } = useParams();
  return (
    <main>
      <p>{id}</p>
      <Welcome />
      <Form />
    </main>
  );
};

export default Main;
