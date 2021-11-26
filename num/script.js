

var firstNumber = +prompt('Введи первую цифру:');
var secondNumber = +prompt('Введи вторую цифру:');
var thirdNumber  = +prompt('Введи третью цифру:');
if (firstNumber > secondNumber && firstNumber < thirdNumber || firstNumber > thirdNumber && firstNumber < secondNumber) {
    alert('cреднее число: ' + firstNumber);
} else if (secondNumber > firstNumber && secondNumber < thirdNumber || secondNumber > thirdNumber && secondNumber < firstNumber) {
    alert('cреднее число: ' + secondNumber);
} else if (c > firstNumber && thirdNumber < secondNumber || thirdNumber > secondNumber && thirdNumber < firstNumber) {
    alert('cреднее число: ' + thirdNumber);
} else if (firstNumber === secondNumber && firstNumber > thirdNumber || firstNumber < thirdNumber) {
    alert('cреднее число: ' + ((firstNumber + secondNumber + thirdNumber) / 3));
} else if (firstNumber === thirdNumber && firstNumber > secondNumber || firstNumber < secondNumber) {
    alert('cреднее число: ' + ((firstNumber + secondNumber + thirdNumber) / 3));
} else if (secondNumber === thirdNumber && secondNumber > firstNumber || secondNumber < firstNumber) {
    alert('cреднее число: ' + ((firstNumber + secondNumber + thirdNumber) / 3));
} else if (firstNumber === secondNumber && firstNumber === thirdNumber) {
    alert('cреднее число: ' + ((firstNumber + secondNumber + thirdNumber) / 3));
} else {
    alert('Что-то не так');
}