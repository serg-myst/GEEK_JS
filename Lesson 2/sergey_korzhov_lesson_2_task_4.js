
/*
Задание 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15
*/

function ShowNumbers(Num=0){
   switch (Num){
      case 16:
      break;
   default:
      console.log(Num);
      ShowNumbers(++Num);
   }
}  

let a = 10;
ShowNumbers(a);