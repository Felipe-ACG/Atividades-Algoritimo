class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return 2 * this.base + 2 * this.altura;
    }
}

const c = new Retangulo(3,2);

console.log("Area:", c.area())
console.log("Perimetro",c.perimetro())
