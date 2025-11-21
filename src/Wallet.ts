export class Wallet {
  readonly _color: string;
  readonly _size: Size;
  _money: number = 0.0;
  _isLost: boolean = false;
  _isOpen: boolean = false;

  constructor(color: string, size: Size) {
    this._color = color;
    this._size = size;
  }

  checkVola() {
    return this._money;
  }

  addVola(amount: number) {
    this._money += amount;
  }

  getVola(amount: number) {
    if (amount > this._money) {
      throw "you don't have enough money";
    }
    this._money -= amount;
    return amount;
  }

  open() {
    this._isOpen = true;
  }

  close() {
    this._isOpen = false;
  }

  lost() {
    this._isLost = true;
  }

  get isOpen() {
    return this._isOpen;
  }

  get isLost() {
    return this._isLost;
  }
}
