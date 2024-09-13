
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    genero:string;
    calificacion?:number;
}

const alumno:Alumno={
    nombre:"Eugenio",
    apellido:"Rios",
    edad:22,
    genero:"M",
    calificacion:9,
}

console.table(alumno)

let mascotas=['perico','perro','gato']

console.log(mascotas[1]);
mascotas[1]="nuevo perro";
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];

tem.push(11)
tem.push('Eugemio')

console.log(tem)