import "./style.css";
import { supabase } from "./supabase.js";

//LOGIN
const form = document.querySelector("#login-form");
const mensaje = document.querySelector("#mensaje");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const email = document.querySelector("#email").value;
  const { error } = await supabase.auth.signInWithOtp({ email });
  if (error) {
    mensaje.innerHTML = "<h3>Error en la autenticación</h3>";
  } else {
    mensaje.innerHTML =
      "<h3>Revisar la bandeja de entrada de tu correo electrónico</h3>";
  }
  //COMPROBAMOS QUE SUPABASE TIENE UNA SESIÓN INICIADA QUE COINCIDA CON MI USUARIO
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user.email === email) {
    document.querySelector("header").style.display = "none";
    subida.style.display = "block";
  } else {
    return;
  }
});

//SUBIDA DE FICHEROS
const uploadInput = document.querySelector("#upload");
const uploadmensaje = document.querySelector("#subida-mensaje");

uploadInput.addEventListener("change", async (ev) => {
  const image = uploadInput.files[0];
  if (!image) {
    return;
  }

  const user = (await supabase.auth.getUser()).data.user;
  const path = `${user.id}/${Date.now()}-${image.name}`;

  const { error } = await supabase.storage
    .from("user-images")
    .upload(path, image);

  if (error) {
    uploadmensaje.innerHTML = "<h2>Error subiendo ficheros</h2>";
  } else {
    getImages(user)
  }
});

//LOGOUT
const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", async () => {
  await supabase.auth.signOut();
  location.reload();
});

//PINTADO DE IMAGENES
const getImages = async (user) => {
  const { data: files } = await supabase.storage
    .from("user-images")
    .list(user.id, { limit: 100 });

    const container = document.querySelector("#container");
    container.innerHTML = "";
    for (const image of files) {
      const url = supabase.storage.from("user-images").getPublicUrl(`${user.id}/${image.name}`).data.publicUrl;
      const li = document.createElement("li");
      li.innerHTML = `<img src="${url}" alt="Random"/>`
      container.appendChild(li);
    }
};

//COMPROBAMOS EL INICIO DE SESION AUTOMATICAMENTE
window.addEventListener("DOMContentLoaded", async () => {
  //COMPROBAMOS QUE SUPABASE TIENE UNA SESIÓN INICIADA QUE COINCIDA CON MI USUARIO
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    document.querySelector("header").style.display = "none";
    subida.style.display = "block";
   getImages(session.user)
  }
});
