import "./Main.scss";
import {useState} from 'react';
import Welcome from "../../components/welcome/Welcome";
import Form from "../../components/form/Form";

export const Main = () => {
    return (
        <main>
                <Welcome />
                <Form />  
        </main>
    )
}

export default Main;