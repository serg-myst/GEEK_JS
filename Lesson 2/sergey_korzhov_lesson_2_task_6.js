/*
Задание 6.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5)
и вернуть полученное значение (использовать switch).
*/

function plus(a, b) {
	return a + b;
}

function minus(a, b) {
	return a - b;
}

function div(a, b) {
	return a / b;
}
function mult(a, b) {
	return a * b;
}

function calculate(arg1, arg2, sign) {
	switch (sign) {
		case "+":
			return plus(arg1, arg2);
			break;
		case "-":
			return minus(arg1, arg2);
			break;
		case "/":
			return div(arg1, arg2);
			break;	
		case "*":
			return mult(arg1, arg2);
			break;	
		default:
			return "Неизвестный тип операции";	
			
	}
}


// Проверка

alert(calculate(2, 3, "+"));
alert(calculate(2, 3, "-"));
alert(calculate(2, 3, "/"));
alert(calculate(2, 3, "*"));
alert(calculate(2, 3, "**"));