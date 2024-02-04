class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("Caixa", "surpresa");

console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);

const secondItem = new Item(12, true)
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

