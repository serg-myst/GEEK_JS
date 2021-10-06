/*
1. 10 + 10 + "10" = "2010". Прибавляем 10 + 10 получаем 20, т.к. складываем числа. Прибавляем "10" (строка). По сути, это конкатенация. Результат строка "2010".
*/
console.log(10 + 10 + "10");
/*
2. 10 + "10" + 10 = "101010". Складываем число со строкой получаем строку 10  + "10" = "1010". Далее складываем строку с число "1010" + 10. Получаем строку "101010".
*/
console.log(10 + "10" + 10);
/*
Похоже на первый пример, но... 10 + +"10" каким-то образом преобразуется в число. Результат число 30.
*/
console.log(10 + 10 + +"10");
/*
10 / -"" = -Infinity
В JavaScript имеется предопределённая глобальная переменная Infinity.
Она хранит специальное значение обозначающее бесконечность – Infinity.
Эта переменная доступна только для чтения.
Значение Infinity можно получить:
В результате деления числа на 0.
Если результат вычислений, не попадает в допустимый диапазон чисел
JavaScript. Любое отрицательное число, которое не может быть
представлено, считается отрицательной бесконечностью (-Infinity), а
положительное – положительной бесконечностью (Infinity).

Вывод: результат некорректного вычисления

*/
console.log(10 / -"");
/*
10 / +"2,5" = NaN
В JavaScript имеется предопределённая глобальная переменная NaN.
Она хранит специальное значение NaN (NaN сокращение от англ. Not a Number – не число). Эта переменная доступна только для чтения.
Значение NaN используется для обозначения математической ошибки, которая возникает в том случае, если математическая операция не может быть совершена.

Вывод: результат некорректного вычисления

*/
console.log(10 / +"2,5");