import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <main>
      <h2>NotFound</h2>
      <p>
        Si no navegas a una dirección valida, te redirigiremos a Home en 5
        segundos.
      </p>
    </main>
  );
};

export default NotFound;
