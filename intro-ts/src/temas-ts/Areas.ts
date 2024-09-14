export class Areas{
    protected base:number;
    protected altura:number;
    constructor (base:number,altura:number){
    this.base=base;
    this.altura=altura;
    }
    public AreaCuadrado(){
    return this.base * this.base;
    }
    public AreaRectangulo(){
    return this.base * this.altura;
    }
    public AreaCirculo(){
    return (this.base*this.base)* 3.1416;
    }
    }
    
    const areas = new Areas(3,9);
    console.log("El area del cuadrado cullo lado mide 3 es: " + areas.AreaCuadrado());
    console.log("el area de un rectángulo culla base mide 3 y altura mide 9 es: " + areas.AreaRectangulo());
    console.log("El area de un circulo cullo radio mide 3 es: "+ areas.AreaCirculo());
