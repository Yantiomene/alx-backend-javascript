export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    this._code = c;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
