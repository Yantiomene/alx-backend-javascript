export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    this._currency = curr;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
