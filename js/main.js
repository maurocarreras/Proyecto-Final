// class Consola{
//     constructor(marca, modelo , resolucion , portatil , generacion){

//         this.marca=marca;
//         this.modelo=modelo;
//         this.resolucion=resolucion;
//         this.portatil=portatil;
//         this.genearcion=generacion;
//         this.presentacion = () =>{
//             console.log(" hola soy una consola de " + this.generacion + " modelo " + this.modelo)
//         }
//     }
// }

// const consola1 = new Consola ("Nintendo","Snes",240, "no","cuarta generacion");

// const consola2 = new Consola ("Sega", "Mega drive", 240,"no" ," cuarta generacion");

// const consola3 =new Consola ("Play Station", "One", 480, "no", "quinta generacion");

// const consola4 = new Consola( "xbox", "xbox classic",480,"no","sexta generacion")

// const consola5 = new Consola("Nintendo","Game boy",240,"si","cuarta generacion")

// console.log(consola1);

// console.log(consola2);

// console.log(consola3);

// console.log(consola4);

// console.log(consola5);

const consolas = [
  { id: 1, nombre: "Nes", precio: 12000 },

  { id: 2, nombre: "Super Nintendo", precio: 18000 },

  { id: 3, nombre: "Sega Genesis", precio: 14000 },

  { id: 4, nombre: "Play Station One", precio: 25000 },

  { id: 5, nombre: "Nintendo 64", precio: 30000 },

  { id: 6, nombre: "Sega Dreamcast", precio: 35000 },

  { id: 7, nombre: "Nintendo Game Cube", precio: 40000 },

  { id: 8, nombre: "Play Station 2", precio: 37000 },

  { id: 9, nombre: " Xbox", precio: 32500 },

  { id: 10, nombre: "Nintendo Wii", precio: 29700 },

  { id: 11, nombre: "Game Boy ", precio: 24999 },

  { id: 12, nombre: "Nintendo DS", precio: 39800 },

  { id: 13, nombre: "Xbox 360", precio: 43200 },

  { id: 14, nombre: "Play Station 3", precio: 51500 },
];

// console.log(consolas);

// console.log(consolas[5]);

// console.log(consolas[0]);

consolas.unshift({ id: 15, nombre: "PC", precio: 17000 });

// consolas.splice(8,1);

// console.log(consolas.includes("Play station 5"));

// console.log(consolas.includes("Super Nintendo"));

const especificaciones = [
  "Marca",
  "modelo",
  "resolucion",
  "portatil",
  "generacion",
];

// console.log(especificaciones);

especificaciones.push("juegos online ");

// console.log(especificaciones);

// console.log(especificaciones.indexOf("portatil"));

function buscador(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

const resultado = buscador(consolas, "X");

console.log(resultado);

let opcionPrecios = prompt(
  "Elige una opcion \n1 - menor precio \n2 -mayor precio"
);

function buscarPrecio(arr, filtro) {
  return arr.filter((el) => {
    switch (filtro) {
      case "1":
        return el.precio > 30000;
        break;

      case "2":
        return el.precio > 30000;
        break;
    }
  });
}

const precio = buscarPrecio(consolas, opcionPrecios);

console.log(precio);
