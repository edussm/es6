var Poligono = require('./poligono.model');

class Retangulo extends Poligono {
    constructor (lados) {
        super(2);
        this.lados = lados;
    }
    get lados() {
        return this._lados;
    }
    set lados(lados) {
        this._lados = lados;
    }

    get area() {
        let [a,b] = this.lados;
        let area = a * b;
        return area;
    }

    get perimetro() {
        let perimetro = 0;
        for (let l of this.lados) {
            perimetro += l;
        }
        return perimetro;
    }
}

module.exports = Retangulo;