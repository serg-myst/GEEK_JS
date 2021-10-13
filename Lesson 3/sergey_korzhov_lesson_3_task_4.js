
/*
Задание 4
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод.
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

*/

const products = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
]
},
{
id: 5,
price: 499,
photos: []
},
{
id: 10,
price: 26,
photos: [
"3.jpg"
]
},
{
id: 8,
price: 78,
},
];

/*
Через функцию более понятно, что просиходит. Проверим наличие реквизита в Json и если длина больше 0 добавим в новый массив
Еще как вариант проверки value.hasOwnProperty('photos') 
*/
function ProductHavePhotos(value){
	if (value['photos']) {
		if (value.photos.length > 0) {
			return true;
		};
	}
}

const result = products.filter(ProductHavePhotos);
console.log(result);


/*
Объекты могут быть отсортированы по значению одного из своих свойств.
Не совсем понимаю как это работает. a - текущее значение, b - следующее значение?
*/
function SortPrices(a, b) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}

const resultprices = products.sort(SortPrices);
console.log(resultprices);