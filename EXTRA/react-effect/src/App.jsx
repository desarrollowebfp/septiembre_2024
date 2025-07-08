import { useState } from "react";
import "./App.css";
import Title from "./components/Title/Title";

const App = () => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <>
      {showTitle && <Title/>}
      <button onClick={() => setShowTitle(!showTitle)}>Switch Title</button>
    </>
  );
};

export default App;
