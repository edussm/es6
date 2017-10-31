var Jedi = require('./jedi.model');

class Sith extends Jedi {
  constructor(name) {
    super(name);
    this.forceIsDark = true;
  }
}

module.exports = Sith;