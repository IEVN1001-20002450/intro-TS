
export class Areas{
    protected area:number;
    constructor(area:number){
        this.area=area;
    }
    imprimir(){
        console.log("Nombre: " + this.area);
    }
} 

class Cuadrado extends Areas{
    private base:number;
    constructor(base:number,area:number){
        super(area);
        this.base=base;
    }
    imprimir(){
        console.log(`calcularemos el area del cuadrado cullo lado mide: ${this.base}`)
    }
    AreaCuadrado(){
        this.area=this.base*this.base;
        console.log(this.area)
    }      
}

const cuadrado= new Cuadrado(5,5)
cuadrado.imprimir();
cuadrado.AreaCuadrado();
