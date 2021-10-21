/*Задание 2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).
*/


//es6
class Product {
  constructor(name, price) {

    this.name = name;
    this.price = price;

  }

    make25PercentDiscount() {
      this.price -= this.price * 0.25;
    }
    
  }

let product1 = new Product("Телевизор", 10000);
product1.make25PercentDiscount();

console.log(product1.price);

let product2 = new Product("Кофемашина", 25000);
product2.make25PercentDiscount();

console.log(product2.price);
