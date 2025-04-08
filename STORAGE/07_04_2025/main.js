document.addEventListener("DOMContentLoaded", () => {
  //Recuperar todos los elementos de la aplicación
  const loginSection = document.querySelector("#login");
  const appDiv = document.querySelector("#appDiv");
  const nameInput = document.querySelector("#name");
  const loginBtn = document.querySelector("#loginBtn");
  const confirmDiv = document.querySelector("#confirmDiv");
  const confirmText = document.querySelector("#confirmText");
  const yesBtn = document.querySelector("#yesBtn");
  const noBtn = document.querySelector("#noBtn");
  const greeting = document.querySelector("#greeting");

  //Inicializar la referencia del temporizador
  let timer;

  const login = (name) => {
    localStorage.setItem("username", name);
    greeting.textContent = `Hola, ${name}`;
    loginSection.style.display = "none";
    appDiv.style.display = "block";
  };

  loginBtn.addEventListener("click", () => {
    const name = nameInput.value;
    if (name) {
      login(name);
    }
  });

  const logout = () => {
    //Rompo el temporizador
    clearTimeout(timer);
    localStorage.removeItem("username");
    appDiv.style.display = "none";
    confirmDiv.style.display = "none";
    loginSection.style.display = "block";
  };

  noBtn.addEventListener("click", logout);

  yesBtn.addEventListener("click", () => {
    clearTimeout(timer);
    confirmDiv.style.display = "none";
    login(localStorage.getItem("username"));
  });

  //Vamos a comprobar si hay un usuario guardado en el localStorage
  const stored = localStorage.getItem("username");
  if (stored) {
    confirmText.textContent = `¿Eres ${stored}?`;
    confirmDiv.style.display = "block";
    //Creamos y lanzamos el temporizador
    timer = setTimeout(() => {
      alert("Tiempo agotado, sesión cerrada");
      logout();
    }, 10000);
  }
});
