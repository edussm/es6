class Jedi {
  constructor(name) {
    this.name = name;
    this.forceIsDark = false;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  toString() {
    return `[${this.name}] ` + (this.forceIsDark ? 'Junte-se a' : 
      'O medo é o caminho para ') + 'o lado sombrio da força.';
  }
}

module.exports = Jedi;
