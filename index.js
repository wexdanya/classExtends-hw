"use strict";
// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.
// Зміниться метод повернути інформацію про товар.

class Product {
  constructor(name, price, currency, amount) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.amount = amount;
  }
  getProductInfo() {
    return (
      "Product name : " +
      this.name +
      " | " +
      "Price : " +
      this.price +
      this.currency +
      " | " +
      "Amount : " +
      this.amount
    );
  }
  buyProduct(amount) {
    if (typeof amount !== "number") {
      throw new TypeError(`Must be number type!`);
    }
    if (amount > this.amount) {
      throw new RangeError(`You can buy maximum ${this.amount} ${this.name}`);
    }
    this.amount = this.amount - amount;
    return this.price * amount;
  }
}
class PhysicalProduct extends Product {
  constructor(name, price, currency, amount, wheight = 1) {
    super(name, price, currency, amount);
    this.wheight = wheight;
  }
  getProductInfo() {
    return (
      "Product name : " +
      this.name +
      " | " +
      "Price : " +
      this.price +
      this.currency +
      " | " +
      "Amount : " +
      this.amount +
      " | " +
      " Wheight : " +
      this.wheight
    );
  }
}
class VirtualProduct extends Product {
  constructor(name, price, currency, amount, memorySize = 1) {
    super(name, price, currency, amount);
    this.memorySize = memorySize;
  }
  getProductInfo() {
    return (
      "Product name : " +
      this.name +
      " | " +
      "Price : " +
      this.price +
      this.currency +
      " | " +
      "Amount : " +
      this.amount +
      " | " +
      " Memory Size : " +
      this.memorySize
    );
  }
}
const product1 = new Product("phone", 2000, "$", 200);
const product2 = new PhysicalProduct("phone", 2000, "$", 200 , 50);
const product3 = new VirtualProduct("phone", 2000, "$", 200 , 500);

try {
  console.log(product1.getProductInfo());
  console.log(product2.getProductInfo());
  console.log(product3.getProductInfo());
} catch (error) {
  console.log(error);
}
