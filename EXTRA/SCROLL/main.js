//Recuperamos la sección y el video
const section = document.querySelector(".video");
const video = document.querySelector("video");

//Nos aseguramos que el video arranque pausado
video.pause();

//Definimos la función que calcula cuanto scroll hemos hecho dentro de la sección y ajusta el video en base a la proporción de la propia sección
const scroll = () => {
    //Calculamos la distancia desde la parte superior de la sección hasta donde estemos haciendo scroll en ese momento
    const distancia = window.scrollY - section.offsetTop;
   //Altura máxima que podemos scrollear dentro de la propia sección
   const total = section.clientHeight - window.innerHeight;
  //Convertir el progreso entre 0 y 1
  let porcentaje = distancia / total;
  //Vamos a asegurarnos que el porcentaje siempre esté entre 0 y 1;
  porcentaje = Math.max(0, porcentaje);
  porcentaje = Math.min(porcentaje, 1);

 //Si ya conocemos la duración del video (mayor que 0), vamos a mover el video calculando su porcentaje
 if(video.duration > 0){
    video.currentTime = video.duration * porcentaje
 }
}

//Ejecutamos por defecto la función scroll
scroll();
//Le añadimos al evento scroll esta función scroll
window.addEventListener("scroll", scroll);