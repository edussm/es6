var Poligono = require('./poligono.model');

class Triangulo extends Poligono {
    constructor (lados) {
        super(3);
        this.lados = lados;
        if (!this.ehTriangulo()) {
            throw new Error(`Os lados ${lados} não formam um triangulo!`);
        }
    }
    get lados() {
        return this._lados;
    }
    set lados(lados) {
        this._lados = lados;
    }

    ehTriangulo() {
        let [a,b,c] = this.lados;
        let result = false;
        // Condições para 3 lados formarem um triangulo
        // | b - c | < a < b + c
        // | a - c | < b < a + c
        // | a - b | < c < a + b
        if (Math.abs(b - c) < a && a < (b + c)) {
            result = true;
        } else if (Math.abs(a - c) < b && b < (a + c)) {
            result = true;
        } else if (Math.abs(a - b) < c && c < (a + b)) {
            result = true;
        }
        
        return result;        
    }

    get area() {
        // usar formula de heron
        // http://mundoeducacao.bol.uol.com.br/matematica/formula-heron.htm
        let [a,b,c] = this.lados;
        let p = this.perimetro/2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return area;
    }

    get perimetro() {
        let perimetro = 0;
        for (let l of this.lados) {
            perimetro += l;
        }
        return perimetro;
    }

    toString() {
        return `Triângulo:
            Lados: ${this.lados}
            Área: ${this.area.toFixed(2)}
            Perímetro: ${this.perimetro}`;
    }
}

module.exports = Triangulo;