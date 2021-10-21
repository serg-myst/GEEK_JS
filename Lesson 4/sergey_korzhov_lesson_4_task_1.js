/*Задание 1
Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/


// Вариант 1. Работаем с числами. Вывод сделал отдельно по каждой ошибке. 
// Можно было бы условие написать в одну строку: if (!Number.isInteger(Num) || Num < 0 || Num > 999) {return num_object}...наши вычисления return num_object  
function ReturnObject(Num){

	let num_object = {};

	if (Number.isInteger(Num)) {
		if (Num < 0 || Num > 999) {
			console.log(`Ошибка. Переданное значение ${Num} вне диапазона 0...999!`);
		}	
		else{
			// Здесь будем создавать объект
			num_object.hundreds = Math.floor(Num / 100);
			num_object.tens = Math.floor(Num / 10) % 10;
			num_object.units = Num % 10;
		}
	}
	else {
			console.log(`Ошибка. Переданное значение ${Num} не является целым числом!`);
		}
	return num_object
}


// Вариант 2. Работаем со строкой. Как вариант, не надо ничего вычислять. В нашем случае добавим нули и откусим справа 3 символа
function ReturnObject_str(Num){

	let num_object = {};
	let leading_nulls = "0000"; // ведущие нули. можно любое число добавить, если потребуются тысячи, миллионы и т.д.
	let obj_requisites = ['hundreds', 'tens', 'units']; // массив с разрядами

	if (Number.isInteger(Num)) {
		if (Num < 0 || Num > 999) {
			console.log(`Ошибка. Переданное значение ${Num} вне диапазона 0...999!`);
		}	
		else{
			// Здесь будем создавать объект
			Num = leading_nulls + Num;
			Num = Num.substr(-3,3); 
			for (let i = 0; i < Num.length; i++){
				num_object[obj_requisites[i]] = +Num[i];
				}
		}
	}
	else {
			console.log(`Ошибка. Переданное значение ${Num} не является целым числом!`);
		}
	return num_object;
}


let my_number = +prompt("Введите целое число от 0 до 999:", "0...999");

let new_object = ReturnObject(my_number);
console.log(new_object);

let new_object_str = ReturnObject_str(my_number);
console.log(new_object_str);