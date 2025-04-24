//Objeto tipado
const teclado: { marca: string; precio: number; disponibilidad: boolean } = {
  marca: "Royal Kludge",
  precio: 50,
  disponibilidad: true,
};

//Interfaces
interface Alumno {
  nombre: string;
  edad?: number;
  matricula: boolean;
  ciudad: string;
}

const pepe: Alumno = {
  nombre: "Pepe",
  matricula: true,
  ciudad: "Segovia",
};

//

interface Articulo {
  nombre: string;
  precio: number;
  disponibilidad: boolean;
  foto: string;
  descripcion: string;
  marca: string;
}

const articulos: Articulo[] = [
  {
    nombre: "Ordenador",
    precio: 5000,
    disponibilidad: true,
    foto: "http://foto.jpg",
    descripcion: "El mejor ordenador del mundo",
    marca: "Hacendado",
  },
  {
    nombre: "Ordenador",
    precio: 5000,
    disponibilidad: true,
    foto: "http://foto.jpg",
    descripcion: "El mejor ordenador del mundo",
    marca: "Hacendado",
  },
];
