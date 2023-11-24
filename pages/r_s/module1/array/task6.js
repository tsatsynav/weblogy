let array = [10, 4, 100, -5, 54, 2];
let sum = 0;

console.log(`Сумма кубов всех чисел массива "на ВХОДЕ": ${sum}.`);
for(let i = 0; i < array.length; i += 1) {
  sum = sum + array[i]**3;
}
console.log(`Сумма кубов всех чисел массива "на ВЫХОДЕ" после цикла for(): ${sum}.`);

sum = 0;
console.log(`Сумма кубов всех чисел массива "на ВХОДЕ": ${sum}.`);
for(let item of array) {
  sum = sum + item ** 3;
}
console.log(`Сумма кубов всех чисел массива "на ВЫХОДЕ" после цикла for...of: ${sum}.`);

sum = 0;
console.log(`Сумма кубов всех чисел массива "на ВХОДЕ": ${sum}.`);
array.forEach((item) => {
  sum = sum + item ** 3;
});
console.log(`Сумма кубов всех чисел массива "на ВЫХОДЕ" после метода массива forEach(): ${sum}.`);

sum = 0;
console.log(`Сумма кубов всех чисел массива "на ВХОДЕ": ${sum}.`);
sum = array.reduce((acc, item) => {
  return acc += item ** 3;
});
console.log(`Сумма кубов всех чисел массива "на ВЫХОДЕ" после метода массива reduce(): ${sum}.`);