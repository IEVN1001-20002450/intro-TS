import {Areas} from "./Areas";

class Volumenes extends Areas{
alturaV:number;
constructor (base:number, altura:number, alturaV:number){
super(base, altura)
this.alturaV=alturaV;
}
public VolumenPiramideRectangular(){
(this.AreaCuadrado() * this.alturaV)/3;
console.log(`El volumen de la piramide rectangular es: ${(this.AreaCuadrado() * this.alturaV)/3}`) 
}
public VolumenRectangular(){
this.AreaRectangulo() * this.alturaV;
console.log(`El volumen de un prisma rectangular es es: ${this.AreaRectangulo() * this.alturaV}`) 
}
public VolumenCilindro(){
this.AreaCirculo() * this.alturaV;
console.log(`el volumen del cilindro es ${this.AreaCirculo() * this.alturaV}`) 
}
}
const volumen = new Volumenes(3,9,2);
volumen.VolumenPiramideRectangular();
volumen.VolumenRectangular();
volumen.VolumenCilindro()