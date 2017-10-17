class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
  get created() {
    return this._created;
  }
  set created(created) {
    if (typeof created === 'undefined' || isNaN(created)) {
      throw new Error('Invalid created');
    }
    if (this.hasOwnProperty('_created')) {
      throw new Error('Created already defined');
    }
    this._created = created;
  }
  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
  static newEmptyMessage() {
    return new Message();
  }
}

/**
 * Exemplo de Herança
 * @extends {Message}
 */
class ImageMessage extends Message {
  constructor(text = '', created = Date.now(),
              url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  /**
   * Method overriden
   * @returns String
   */
  toString() {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}

// Instancias
var emptyMessage = Message.newEmptyMessage();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();

// Imprimindo Objetos
console.log(emptyMessage);
console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));
console.log(new Date(textMessage.created).toString());
