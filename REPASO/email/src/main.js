import "./style.css";
import emailjs from "@emailjs/browser";

//PINTAMOS EL TEMPLATE
document.querySelector("#app").innerHTML = `
<h1>Ejemplo EmailJS</h1>
<form id="emailForm">
      <label>Nombre Promotora</label>
      <input type="text" name="name" />
      <label>Email de la promotora</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message"></textarea>
      <input type="submit" value="Enviar" />
</form>
`;

//GUARDAMOS LAS CLAVES
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

//INICIALIZAMOS EL SERVICIO DE EMAILJS
emailjs.init({
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
});

//RECUPERAMOS EL FORMULARIO
const emailForm = document.querySelector("#emailForm");

//AÑADIMOS LA FUNCIONALIDAD DE ENVIAR EL FORMULARIO EN EL SUBMIT
emailForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  emailjs.sendForm("service_b0vgqnp", "template_3cf4ks9", "#emailForm").then(
    (response) => {
      emailForm.reset();
      alert("Mensaje enviado correctamente!");
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      alert(
        "Algo ha fallado en el envio del correo, por favor contactanos en asndkgnasd@gmai.com"
      );
      console.log("FAILED...", error);
    }
  );
});
