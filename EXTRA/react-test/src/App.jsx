import "./App.css";
import Header from "./components/Header/Header";
import Flex from "./components/Flex/Flex";
import Button from "./components/Button/Button";
import Estado from "./components/Estado/Estado";
import { useState } from "react";

const saludar = () => {
  console.log("Hola");
};

const adios = () => {
  console.log("Adios");
};

const App = () => {
  const [title, setTitle] = useState("Bienvenidos a React");
  return (
    <>
      <Header title={title} />
      <input type="text" onInput={(ev) => {
        setTitle(ev.target.value)
      }}/>
      <Flex direction="row" gap="md">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </Flex>
      <Flex gap="md">
        <Button action={saludar}>Register</Button>
        <Button action={adios}>Delete</Button>
      </Flex>
      <Estado />
    </>
  );
};

export default App;
