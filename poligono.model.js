class Poligono {
    constructor(numLados) {
        this.numLados = numLados;
    }
    get numLados() {
        return this._numLados;
    }
    set numLados(numLados) {
        this._numLados = numLados;
    }
    get perimetro(){
        throw new Error('Metodo nao implementado!');
    }
    get area() {
        throw new Error('Metodo nao implementado!');
    }
    toString() {
        return `Polígono
            ${this.lados.length} Lados: ${this.lados}
            Área: ${this.area.toFixed(2)}
            Perímetro: ${this.perimetro}`;
    }
}

module.exports = Poligono;
