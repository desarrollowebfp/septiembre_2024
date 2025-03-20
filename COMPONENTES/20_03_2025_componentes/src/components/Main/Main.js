import "./Main.css";
import Text from "../Text/Text";

const Main = () => {
  return `<main>
  ${Text("Hola", "md", "center")}
  ${Text("Adios", "lg", "right")}
  </main>`;
};

export default Main;
