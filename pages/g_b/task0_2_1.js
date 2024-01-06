let firstNum = Number(prompt("Введите первое число"));
let operator = prompt("Введите оператор");
let secondNum = Number(prompt("Введите второе число"));

if (operator === "+") {
  alert(firstNum + secondNum);
} else if (operator === "-") {
  alert(firstNum - secondNum);
} else if (operator === "*") {
  alert(firstNum * secondNum);
} else if (operator === "/") {
  alert(firstNum / secondNum);
} else {
  alert("Где-то допущена ошибка.");
}
